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
    var i, len, returnValue = "optional";
    len = schema.required.length;
    for (i = 0; i < len; i++) {
      if (prop === schema.required[i]) {
        returnValue = 'required';
        break;
      }
    }
    return returnValue;
  }

  function getValidationErrorString(valError) {
    var message = "The example has failed to validate:  ",
      i;
    for (i = 0; i < valError.errors.length; i = 1 + i) {
      message += "\n " + valError.errors[i].message + "\n Data path: " + valError.errors[i].dataPath;
    }
    for (i = 0; i < valError.missing.length; i = 1 + 1) {
      message += "\n " + valError.missing[i].message + "\n Data path: " + valError.missing[i].dataPath;
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



  function validate(payload, schema) {
    var response = {
        valid: true,
        message: "Valid CMAPI Payload"
      },
      valid = tv4.validateMultiple(payload, schema);

    if (!valid.valid) {
      response.message = getValidationErrorString(valid);
      response.valid = false;
    }
    return response;
  }

  function render(link, channelDef) {

    var output = [],
      i = 0,
      prop,
      propVal,
      optional,
      schema = channelDef.schema,
      noteLen = channelDef.notes.length,
      type,
      defaultVal;

    try {
      output.push('<h2 id="toc_0">' + schema.title + '</h2>');

      output.push('<h3 id="toc_1">Purpose:</h3>');

      output.push('<p>' + schema.description + '</p>');

      output.push('<h3 id="toc_2">Channel:</h3>');

      output.push('<p>' + schema.title + '</p>');

      output.push('<h3 id="toc_3">Payload:</h3>');

      output.push('<pre><code class="javascript">');
      output.push('{');
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
      output.push('<h3 id="toc_3">Properties:</h4>');
      output.push('<table><thead><tr><th>Property</th><th>Required</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>');

      for (prop in schema.properties) {
        propVal = schema.properties[prop];
        optional = checkRequired(prop, schema);
        if (propVal.hasOwnProperty("type")) {
          type = propVal.type;
        } else if (propVal.hasOwnProperty("enum")) {
          type = "enumeration <br/>" + JSON.stringify(propVal.enum);
        }
        defaultVal = "";
        if (propVal.hasOwnProperty("default")) {
          defaultVal = propVal["default"];
        }

        output.push('<tr>');
        output.push('<td>' + prop + '</td>');
        output.push('<td>' + optional + '</td>');
        output.push('<td>' + type + '</td>');
        output.push('<td>' + defaultVal + '</td>');
        output.push('<td>' + propVal.description + '</td>');
        output.push('</tr>');

      }
      output.push('</tbody></table>');
      output.push('<h3 id="toc_3">Notes</h3>');
      if (noteLen > 0) {
        for (i = 0; i < noteLen; i++) {

          output.push('<p>' + (i + 1) + ':  <em>' + channelDef.notes[i] + '</em></p>');
        }
      } else {
        output.push('<p>There are no notes for this channel</p>');
      }
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
              validationIntent = "Pass Validation";
            } else {
              validationIntent = "Fail Validation";
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
    } catch (err) {
      output = ["An error occured while parsing the example: " + err.message];
    }
    return output.join("");
  }

  function validateUserPayload() {
    var exampleValidation,
      message = "";
    try {
      var target = $("#userPayloadValid");
      exampleValidation = validate(JSON.parse($("#userPayloadInput").val()), currentSchema);
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
    var url = "channels/"+target+".js";
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
      validateUserPayload();
    },
    clearInput: function () {
      $("#userPayloadInput").val("");
    }
  };
  return publicInterface;
}());