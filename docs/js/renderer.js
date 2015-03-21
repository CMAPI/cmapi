/*global window, cmapi, tv4, alert */



var queryStringUtil = (function () {
  var publicInterface = {
    // Searches the URL query string for a key defned by 'name' and returns the string value
    getParameterByName: function (name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(window.location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  };

  return publicInterface;
}());

var cmapi_channel_renderer = (function () {
  var publicInterface,
    baseUrl = "../src/schemas/",
    currentSchema,
    currentChannel,
    currentOverview,
    spellCheck = "";


  function checkRequired(prop, schema) {
    var i,
      len,
      returnValue = cmapi.lang.OPTIONAL;
    if (schema.required) {
      len = schema.required.length;
      for (i = 0; i < len; i++) {
        if (prop === schema.required[i]) {
          returnValue = cmapi.lang.REQUIRED;
          break;
        }
      }
    }
    return returnValue;
  }

  function getValidationErrorString(valError) {
    var message = cmapi.lang.MESSAGE_VALIDATION_FAILURE,
      i;
    for (i = 0; i < valError.errors.length; i = 1 + i) {
      message += "\n " + valError.errors[i].message + " " + valError.errors[i].dataPath;
    }

    return message;
  }

  function getObjectString(obj) {
    var raw = JSON.stringify(obj),
      objChars = raw.split(""),
      tab = "&nbsp;&nbsp;",
      indentation = "",
      indent = 0,
      len = objChars.length,
      i,
      txt,
      k,
      bypass = false;

    for (i = 0; i < len; i++) {
      txt = objChars[i];
      if (bypass === false) {
        switch (txt) {
        case '"':
          bypass = true;
          break;
        case "{":
          indent++;
          indentation = "";
          for (k = 0; k < indent; k++) {
            indentation += tab;
          }
          objChars[i] = "{\n" + indentation;

          break;
        case "[":
          indent++;
          indentation = "";
          for (k = 0; k < indent; k++) {
            indentation += tab;
          }
          objChars[i] = "[\n" + indentation;

          break;
        case ",":
          objChars[i] = ",\n" + indentation;
          break;
        case "}":
          indent--;
          indentation = "";
          for (k = 0; k < indent; k++) {
            indentation += tab;
          }
          if (objChars[i + 1] === ",") {
            objChars[i] = "\n" + indentation + "}";
            objChars[i + 1] = ",\n" + indentation;
          } else {
            objChars[i] = "\n" + indentation + "}" + indentation;
          }
          break;
        case "]":
          indent--;
          indentation = "";
          for (k = 0; k < indent; k++) {
            indentation += tab;
          }
          if (objChars[i + 1] === ",") {
            objChars[i] = "\n" + indentation + "]";
            objChars[i + 1] = ",\n" + indentation;
          } else {
            objChars[i] = "\n" + indentation + "]" + indentation;
          }
          break;
        }
      } else {
        if (txt === '"') {
          bypass = false;
        }
      }
    }
    return objChars.join("");
  }

  function validate(payload, schema, banUnknownProps) {
    var response = {
        valid: true,
        message: cmapi.lang.MESSAGE_VALIDATION_SUCCESS
      },
      valid;
    if (banUnknownProps === true) {
      valid = tv4.validateMultiple(payload, schema, true, true);
    } else {
      valid = tv4.validateMultiple(payload, schema, true);
    }

    if (!valid.valid) {
      response.message = getValidationErrorString(valid);
      response.valid = false;
    }
    return response;
  }

  // checks if channel is updated or new, returns tr with propper css class to highlight the row
  function checkStatus(property) {
    var trValue = "<tr>";
    if (property !== undefined && property !== null && property.hasOwnProperty("status")) {
      switch (property.status.toLowerCase()) {
      case "new":
        trValue = '<tr class="newContent">';
        break;
      case "updated":
        trValue = '<tr class="updatedContent">';
        break;
      }
    }
    return trValue;

  }

  // Creates an HTML table for the schema with embedded tables via recursion for properties with sub-properties
  function getObjectTable(obj, output, parent) {
    var prop,
      propVal,
      optional,
      type,
      defaultVal,
      len,
      i,
      subProp,
      j,
      options,
      opLen,
      opt,
      enums;

    output.push('<table><thead><tr>');
    output.push('<th>' + cmapi.lang.TABLE_HEADER_PROPERTY + '</th>');
    output.push('<th>' + cmapi.lang.TABLE_HEADER_REQUIRED + '</th>');
    output.push('<th>' + cmapi.lang.TABLE_HEADER_TYPE + '</th>');
    output.push('<th>' + cmapi.lang.TABLE_HEADER_DESCRIPTION + '</th>');
    output.push('</tr></thead><tbody>');
    // DO NOT wrap in if hasOwnProperty as JSLint may suggest or no properties will get enumerated
    for (prop in obj) {
      propVal = obj[prop];

      optional = checkRequired(prop, parent);

      if (propVal.hasOwnProperty("type")) {
        type = propVal.type;
        if ($.isArray(type)) {
          //type = "Array";
          type = propVal.type.join(", ");
        }
      } 
      if (propVal.hasOwnProperty("enum")) {
        enums = JSON.stringify(propVal.enum).split(",").join(", ");
        type += "<br/>" + enums;
      }
      if (propVal.hasOwnProperty("default")) {


        type += ' <br/>default= ' + (typeof propVal["default"] === "string" ? '"' : "") + propVal["default"] + (typeof propVal["default"] === "string" ? '"' : "");

      }

      if ($.isArray(propVal)) {
        output.push('<tr>');
        output.push('<td colSpan="4">' + prop + '</td>');
        len = propVal.length;
        for (i = 0; i < len; i++) {
          output.push('<tr>');
          output.push('<td colSpan="4">');
          output.push(getObjectTable(propVal[i], output, obj));
          output.push('</td>');
          output.push('</tr>');
        }
        output.push('</td>');
        output.push('</tr>');
      } else {
        output.push(checkStatus(propVal));
        output.push('<td>' + prop + '</td>');
        if (optional === "required") {
          output.push('<td style="font-weight:600">' + optional + '</td>');
        } else {
          output.push('<td>' + optional + '</td>');
        }
        //output.push('<td >' + extension + '</td>');
        output.push('<td>' + type + '</td>');
        output.push('<td' + spellCheck + '>' + propVal.description + '</td>');
        output.push('</tr>');
        if (propVal.hasOwnProperty("properties")) {
          subProp = propVal.properties;

          output.push('<tr>');
          output.push('<td colSpan="4">');
          output.push(getObjectTable(subProp, output, propVal));
          output.push('</td>');
          output.push('</tr>');

        } else if (propVal.hasOwnProperty("oneOf")) {
          options = propVal.oneOf;
          opLen = options.length;
          output.push('<tr>');
          output.push('<td colSpan="4">');
          output.push('One Of: <br/>');
          for (j = 0; j < opLen; j++) {
            opt = options[j].properties;
            output.push(options[j].title + ' <br/>');
            output.push(getObjectTable(opt, output, options[j]));

          }
          output.push('</td>');
          output.push('</tr>');

        }
      }

    }
    output.push('</tbody></table>');
  }

  // Creates an HTML table for the schema with embedded tables via recursion for properties with sub-properties
  function getObjectPayload(obj, output, parent, indent) {
    var prop,
      propVal,
      optional,
      type,
      i,
      indentStr = "  ",
      isArr = false;

    if (isNaN(indent)) {
      indent = 0;
    }

    for (i = 0; i < indent; i++) {
      indentStr += "  ";
    }
    i = 0;


    output.push('{');
    // DO NOT wrap in if hasOwnProperty as JSLint may suggest or no properties will get enumerated
    for (prop in obj) {
      type = '';
      propVal = obj[prop];
      if (i > 0) {
        output.push(", ");
      }
      output.push('<br/>');
      optional = checkRequired(prop, parent);
      output.push(indentStr + prop + ": ");
      if (propVal.hasOwnProperty("type")) {
        type = propVal.type;
        if ($.isArray(type)) {
          //type = "Array";
          type = propVal.type.join(" | ");

        } else if (type === "array") {
          isArr = true;
        }
      }

      if (propVal.hasOwnProperty("enum")) {
        var enumner = propVal.enum.join('", "');
        type = type.replace("| enum", "");
        
        type += ' ["' + enumner + '"]';

      }

      output.push(type);
      if (optional === "optional") {
        output.push(" (" + optional + ")");
      } else {

        output.push(' (<span style="font-weight:600;">' + optional + '</span>)');
      }
      if (propVal.hasOwnProperty("properties")) {
        if (isArr === true) {
          output.push('[');
        }
        getObjectPayload(propVal.properties, output, propVal, indent + 1);
        if (isArr === true) {
          output.push(']');
          isArr = false;
        }
      } else {
        isArr = false;
      }
      i++;
    }
    indentStr = "  ";
    for (i = 0; i < indent - 1; i++) {
      indentStr += "  ";
    }
    i = 0;

    output.push('<br/>');
    if (indent > 0) {
      output.push(indentStr);
    }
    output.push('}');
  }


  //Creates the overall HTML template to render to page
  function render(channelDef) {

    var output = [],
      i = 0,
      schema = channelDef.schema,
      noteLen = 0;

    if (channelDef.hasOwnProperty("notes")) {
      noteLen = channelDef.notes.length;
    }

    try {
      output.push('<h2 id="toc_0"' + spellCheck + '>' + schema.title + '</h2>');

      output.push('<p' + spellCheck + '>' + schema.description + '</p>');

      output.push('<h3 id="toc_3">Payload:</h3>');

      output.push('<pre><code class="javascript">');

      getObjectPayload(schema.properties, output, schema, 0);
      output.push('</code></pre>');

      output.push('<a href="../src/schemas/' + schema.title + '.schema.js" target="_blank">View JSON Schema for ' + schema.title + '</a>');

      output.push('<h3 id="toc_3">Payload Property Descriptions:</h3>');
      output.push('<p >Changes from previous version are highlighted in <span class="updatedContent">yellow</span> and additions are highlighted in <span class="newContent">green</span>.  If the channel is new for this version the properties WILL NOT be highlighted.</p>');
      getObjectTable(schema.properties, output, schema);

      
      if (noteLen > 0) {
        output.push('<h3 id="toc_3">Notes</h3>');
        for (i = 0; i < noteLen; i++) {

          output.push('<p' + spellCheck + '>' + (i + 1) + ':  <em>' + channelDef.notes[i] + '</em></p>');
        }
      } else {
        output.push('<br/><br/>');
      }


      // output.push('<p>' + JSON.stringify(channelDef.schema) + '</p>');
      //output.push('<pre><code class="javascript">');
      //output.push(getObjectString(channelDef.schema));
      //output.push('</code></pre>');
    } catch (err) {
      output = ["An error occured when parsing the schema: " + err.message];
    }
    return output.join("");
  }

  function appendExamples(examples, channelDef) {
    var output = [],
      exampleLen,
      exampleValidation,
      validationIntent,
      i;
    try {
      if (examples !== undefined && examples !== null) {
        exampleLen = examples.length;
        if (exampleLen > 0) {
          output.push('<h3 id="toc_3">Examples</h3>');

          for (i = 0; i < exampleLen; i++) {
            if (examples[i].valid === true) {
              validationIntent = "This Should Pass Validation";
            } else {
              validationIntent = "This Should Fail Validation";
            }

            output.push('<p>' + examples[i].title + ' - ' + validationIntent + '</p>');

            exampleValidation = validate(examples[i].payload, channelDef.schema);
            if (exampleValidation.valid === true) {
              output.push('<p style="color: green">' + exampleValidation.message + '</p>');
            } else {
              output.push('<p style="color: red">' + exampleValidation.message + '</p>');
            }
            if (exampleValidation.valid === examples[i].valid) {
              output.push('<p style="color: green">This message validated as expected</p>');
            } else {
              output.push('<p style="color: red">This example DID NOT validate as expected.  This example was expected to validate as ' + examples[i].valid.toString() + '</p>');
            }

            output.push('</p><textarea rows="10" style="width: 100%" readonly >' + getObjectString(examples[i].payload) + '</textarea>');

          }
        }
      }
      output.push('<p id="#userPayloadValid" >Try it yourself...</p>');
      output.push('<textarea id="userPayloadInput" rows="10" style="width: 100%" placeholder="Enter your own ' + currentChannel + ' message payload to validate here..." ></textarea>');
      output.push('<button style="border: 1px solid grey; padding: 5px; margin-top: 5px; margin-right: 5px" onclick="cmapi_channel_renderer.validateInput()">Validate</button>');
      output.push('<button style="border: 1px solid grey; padding: 5px; margin-top: 5px;" onclick="cmapi_channel_renderer.clearInput()">Clear</button>');
      output.push('<form action=""><input type="checkbox" name="banUnknownCB" id="banUnknownCB" value="false">Ban Unknown Properties<br></form>');
    } catch (err) {
      output = ["An error occured while parsing the example: " + err.message];
    }
    return output.join("");
  }

  function validateUserPayload(banUnknown) {
    var exampleValidation,
      message = "";
    try {
      var target = $("#userPayloadValid");
      exampleValidation = validate(JSON.parse($("#userPayloadInput").val()), currentSchema, banUnknown);
      message = exampleValidation.message;
      if (exampleValidation.valid === true) {
        target.css("color", "green");
      } else {
        target.css("color", "red");
      }

    } catch (err) {
      message = "Please enter a valid JSON object: " + err.message;
    }
    alert(message);
  }

  function renderOverview(overview) {
    var len,
      sLen,
      i,
      k,
      section,
      sections,
      paragraphs,
      output = [];
    if (overview.hasOwnProperty("title")) {
      output.push('<h2 id="toc_0">' + overview.title + '</h2>');
    }
    sections = overview.sections;
    len = sections.length;
    for (i = 0; i < len; i++) {
      section = sections[i];
      output.push('<h3 >' + section.title + '</h2>');
      paragraphs = section.paragraphs;
      sLen = paragraphs.length;
      for (k = 0; k < sLen; k++) {
        output.push('<p' + spellCheck + '>' + paragraphs[k] + '</p>');
      }
    }
    return output.join("");
  }

  function exampleLoaded(args) {
    $('#main').html($('#main').html() + appendExamples(cmapi.channel[args.channel].examples, cmapi.channel[args.channel]));
  }

  function channelLoaded(args) {
    var channelDef = cmapi.channel[args.channel];
    currentChannel = args.channel;
    currentSchema = channelDef.schema;
    $('#main').html(render(cmapi.channel[args.channel]));
    var url = baseUrl + args.channel + ".examples.js";
    exampleLoaded({
      url: url,
      channel: args.channel,
    });
  }

  function overviewLoaded() {
    var overview = cmapi.overview[currentOverview];
    $('#main').html(renderOverview(overview));
  }

  function loadChannelDef(channel) {
    var url = baseUrl + channel + ".js";
    channelLoaded({
      url: url,
      channel: channel
    });
  }

  function loadOverview(target) {
    currentOverview = target;
    overviewLoaded();
  }

  publicInterface = {
    loadContent: function (target) {
      $('#main').html('<img src="img/loading.gif" />');
      if (!target.data.hasOwnProperty("type")) {
        target.data.type = "";
      }
      switch (target.data.type) {
      case "overview":
        loadOverview(target.key);
        break;
      default:
        loadChannelDef(target.key);
        break;
      }
    },
    validateInput: function () {
      var banUnknown = false;
      if ($("#banUnknownCB").is(':checked') === true) {
        banUnknown = true;
      }
      validateUserPayload(banUnknown);
    },
    clearInput: function () {
      $("#userPayloadInput").val("");
    }
  };

  var doSpellCheck = queryStringUtil.getParameterByName("spellcheck");
  if (doSpellCheck === "true") {
    spellCheck = ' contenteditable="true" spellcheck="true" ';
  }

  return publicInterface;
}());
