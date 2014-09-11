/*global window, cmapi, tv4, alert */
var cmapi = cmapi || {};
cmapi.channel = cmapi.channel || {};

cmapi.channel.renderer = (function () {
  var publicInterface,
    baseUrl = "channels/",
    currentSchema,
    currentChannel,
    currentOverview;

  function loadScript(args) {
    var script = document.createElement("script");

    script.type = "text/javascript";

    if (script.readyState) { //IE
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          args.callback(args);
        }
      };
    } else { //Others
      script.onload = function () {
        args.callback(args);
      };
    }

    script.src = args.url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

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
    if (banUnknownProps === false) {
      valid = tv4.validateMultiple(payload, schema, true);
    } else {
      valid = tv4.validateMultiple(payload, schema, true, true);
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
      enums,
      extension = "";

    output.push('<table><thead><tr>');
    output.push('<th>' + cmapi.lang.TABLE_HEADER_PROPERTY + '</th>');
    output.push('<th>' + cmapi.lang.TABLE_HEADER_REQUIRED + '</th>');
    output.push('<th>' + cmapi.lang.TABLE_HEADER_EXTENSION + '</th>');
    output.push('<th>' + cmapi.lang.TABLE_HEADER_TYPE + '</th>');
    output.push('<th>' + cmapi.lang.TABLE_HEADER_DEFAULT + '</th>');
    output.push('<th>' + cmapi.lang.TABLE_HEADER_DESCRIPTION + '</th>');
    output.push('</tr></thead><tbody>');
    // DO NOT wrap in if hasOwnProperty as JSLint may suggest or no properties will get enumerated
    for (prop in obj) {
      propVal = obj[prop];
      extension = "N/A";
      if (propVal.hasOwnProperty("extension")) {
        extension = propVal.extension;
      }
      optional = checkRequired(prop, parent);
      defaultVal = "";
      if (propVal.hasOwnProperty("default")) {
        defaultVal = propVal["default"];
      }
      if (propVal.hasOwnProperty("type")) {
        type = propVal.type;
        if ($.isArray(type)) {
          type = "Array";
        }
        if ($.isArray(type) && typeof type[0] === "object") {
          output.push(checkStatus(propVal));
          output.push('<td>' + prop + '</td>');
          output.push('<td>' + optional + '</td>');
          output.push('<td>' + extension + '</td>');
          output.push('<td>' + type + '</td>');
          output.push('<td>' + defaultVal + '</td>');
          output.push('<td>' + propVal.description + '</td>');
          output.push('</tr>');
          output.push('<tr>');
          output.push('<td colSpan="6">');
          len = propVal.type.length;
          for (i = 0; i < len; i++) {
            output.push('<tr>');
            output.push('<td colSpan="6">');
            output.push(getObjectTable(propVal.type[i].properties, output, obj));
            output.push('</td>');
            output.push('</tr>');
          }
          output.push('</td>');
          output.push('</tr>');
          continue;
        }
      } else if (propVal.hasOwnProperty("enum")) {
        enums = JSON.stringify(propVal.enum).split(",").join(", ");
        type = "enumeration <br/>" + enums;
      }

      if ($.isArray(propVal)) {
        output.push('<tr>');
        output.push('<td colSpan="6">' + prop + '</td>');
        len = propVal.length;
        for (i = 0; i < len; i++) {
          output.push('<tr>');
          output.push('<td colSpan="6">');
          output.push(getObjectTable(propVal[i], output, obj));
          output.push('</td>');
          output.push('</tr>');
        }
        output.push('</td>');
        output.push('</tr>');
      } else {
        output.push(checkStatus(propVal));
        output.push('<td>' + prop + '</td>');
        output.push('<td>' + optional + '</td>');
        output.push('<td >' + extension + '</td>');
        output.push('<td>' + type + '</td>');
        output.push('<td>' + defaultVal + '</td>');
        output.push('<td>' + propVal.description + '</td>');
        output.push('</tr>');
        if (propVal.hasOwnProperty("properties")) {
          subProp = propVal.properties;

          output.push('<tr>');
          output.push('<td colSpan="6">');
          output.push(getObjectTable(subProp, output, propVal));
          output.push('</td>');
          output.push('</tr>');

        } else if (propVal.hasOwnProperty("oneOf")) {
          options = propVal.oneOf;
          opLen = options.length;
          output.push('<tr>');
          output.push('<td colSpan="6">');
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

  //Creates the overall HTML template to render to page
  function render(link, channelDef) {

    var output = [],
      i = 0,
      prop,
      optional,
      schema = channelDef.schema,
      noteLen = channelDef.notes.length,
      changeLen = 0;

    if (channelDef.hasOwnProperty("changeLog")) {
      changeLen = channelDef.changeLog.length;
    }

    try {
      output.push('<h2 id="toc_0">' + schema.title + '</h2>');

      output.push('<h3 id="toc_1">Purpose:</h3>');

      output.push('<p>' + schema.description + '</p>');

      output.push('<h3 id="toc_2">Channel:</h3>');

      output.push('<p>' + schema.title + '</p>');

      output.push('<h3 id="toc_3">Payload:</h3>');

      output.push('<pre><code class="javascript">');
      output.push('{');
      // DO NOT wrap in if hasOwnProperty as JSLint may suggest or no properties will get enumerated
      for (prop in schema.properties) {
        if (i > 0) {
          output.push(", ");
        }
        output.push('<br/>');
        optional = checkRequired(prop, schema);
        output.push(prop + ": " + schema.properties[prop].type + " (" + optional + ")");
        i++;
      }
      i = 0;
      output.push('<br/>}');

      output.push('</code></pre>');
      output.push('<h3 id="toc_3">Properties:</h3>');
      output.push('<p >Changes from previous version are highlighted in <span class="updatedContent">yellow</span> and additions are highlighted in <span class="newContent">green</span>.  If the channel is new for this version the properties WILL NOT be highlighted.</p>');
      getObjectTable(schema.properties, output, schema);

      output.push('<h3 id="toc_3">Notes</h3>');
      if (noteLen > 0) {
        for (i = 0; i < noteLen; i++) {

          output.push('<p>' + (i + 1) + ':  <em>' + channelDef.notes[i] + '</em></p>');
        }
      } else {
        output.push('<p>There are no notes for this channel</p>');
      }

      output.push('<h3 id="toc_3">Change Log</h3>');
      if (changeLen > 0) {
        for (i = 0; i < changeLen; i++) {

          output.push('<p>' + channelDef.changeLog[i].version + ' - ' + channelDef.changeLog[i].change + '</p>');
        }
      } else {
        output.push('<p>There are no changes noted for this channel</p>');
      }
      output.push('<a target="_blank" href="https://github.com/CMAPI/cmapi/commits/v1.3.0/channels/' + schema.title + '.js">View version history for this file</a>');

      // https://github.com/CMAPI/cmapi/commits/master/channels/cmapi.appendix.b.js

      output.push('<h3 id="toc_4">Schema</h3>');
      output.push('<h4 id="toc_4">Link</h4>');
      output.push('<p><a href="' + link + '" target="_blank">' + link + '</a></p>');
      // output.push('<p>' + JSON.stringify(channelDef.schema) + '</p>');
      output.push('<pre><code class="javascript">');
      output.push(getObjectString(channelDef.schema));
      output.push('</code></pre>');
    } catch (err) {
      output = ["An error occured when parsing the schema: " + err.message];
    }
    return output.join("");
  }

  function appendExamples(exampleLink, examples, channelDef) {
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
          output.push('<h4 id="toc_4">Link</h4>');
          output.push('<p><a href="' + exampleLink + '" target="_blank">' + exampleLink + '</a></p>');
          for (i = 0; i < exampleLen; i++) {
            if (examples[i].valid === true) {
              validationIntent = "This Should Pass Validation";
            } else {
              validationIntent = "This Should Fail Validation";
            }

            output.push('<h4 id="toc_4">' + examples[i].title + ' - ' + validationIntent + '</h4>');

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
      output.push('<button style="border: 1px solid grey; padding: 5px; margin-top: 5px; margin-right: 5px" onclick="cmapi.channel.renderer.validateInput()">Validate</button>');
      output.push('<button style="border: 1px solid grey; padding: 5px; margin-top: 5px;" onclick="cmapi.channel.renderer.clearInput()">Clear</button>');
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
      message = "An error occured while attempting to validate your payload: " + err.message;
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
      output.push('<h3>' + section.title + '</h3>');
      paragraphs = section.paragraphs;
      sLen = paragraphs.length;
      for (k = 0; k < sLen; k++) {
        output.push('<p >' + paragraphs[k] + '</p>');
      }
    }
    return output.join("");
  }

  function exampleLoaded(args) {
    $('#main').html($('#main').html() + appendExamples(args.url, cmapi.channel[args.channel].examples, cmapi.channel[args.channel]));
  }

  function channelLoaded(args) {
    var channelDef = cmapi.channel[args.channel];
    currentChannel = args.channel;
    currentSchema = channelDef.schema;
    $('#main').html(render(args.url, cmapi.channel[args.channel]));
    var url = baseUrl + args.channel + ".examples.js";
    loadScript({
      url: url,
      channel: args.channel,
      callback: exampleLoaded
    });

  }

  function overviewLoaded() {
    var overview = cmapi.overview[currentOverview];
    $('#main').html(renderOverview(overview));
  }

  function loadChannelDef(channel) {
    var url = baseUrl + channel + ".js";
    loadScript({
      url: url,
      channel: channel,
      callback: channelLoaded
    });
  }

  function loadOverview(target) {
    var url = "channels/" + target + ".js";
    currentOverview = target;
    loadScript({
      url: url,
      channel: "",
      callback: overviewLoaded
    });
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
  return publicInterface;
}());
