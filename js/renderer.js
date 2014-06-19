var cmapi = cmapi || {};
cmapi.channel = cmapi.channel || {};



cmapi.channel.renderer = (function () {
  var publicInterface,
    baseUrl = "channels/";

function loadChannelDef(channel) {
    var url = baseUrl + channel + ".js";
      loadScript({url: url, channel: channel, callback: channelLoaded});
  }

  function loadScript(args) {
        var script = document.createElement("script");

        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState === "loaded" ||
                    script.readyState === "complete") {
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

    function channelLoaded (args) {
      $('#main').html(render(args.url, cmapi.channel[args.channel]));
      var url = baseUrl + args.channel + ".examples.js";
      loadScript({url: url, channel: args.channel, callback: exampleLoaded});

    }

    function exampleLoaded (args) {
      $('#main').html($('#main').html()+appendExamples( args.url, cmapi.channel[args.channel].examples, cmapi.channel[args.channel]));
    }

    function overviewLoaded (args) {
     $('#main').html(renderOverview(cmapi.overview));
    }

  function loadOverview() {
    var url = "cmapi.overview.js";
    loadScript({url: url, channel: "", callback: overviewLoaded})
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
    var message = "The example has failed to validate:  ";
    for (i = 0; i < valError.errors.length; i = 1 + i) {
      message += "\n " + valError.errors[i].message + "\n Data path: " + valError.errors[i].dataPath;
    }
    for (i = 0; i < valError.missing.length; i = 1 + 1) {
      message += "\n " + valError.missing[i].message + "\n Data path: " + valError.missing[i].dataPath;
    }
    return message;
  }

  function getExampleString(example) {
    var response = [],
      i = 0,
      prop,
      propVal;
      if($.isArray(example)) {
        response.push("[");
      } else {
        response.push("{");
      }

    for (prop in example) {
      if (i != 0) {
        response.push(",");
      }
      propVal = example[prop];
      response.push('"' + prop + '": ');
      if(typeof propVal === "object"){
        response.push(getExampleString(propVal));

      }else{
      response.push('"' + propVal + '"');
      }
      i++;

    }
    if($.isArray(example)) {
        response.push("]");
      } else {
        response.push("}");
      }
    return response.join("");
  }
/*
  function getExampleString(example) {
    var response = [],
      i = 0,
      prop,
      propVal,
      isArray = $.isArray(example);

      if(isArray) {
        response.push("[");
      } else {
        response.push("{");
      }

    for (prop in example) {
      if (i != 0) {
        response.push(",");
      }
      propVal = example[prop];
      response.push('"' + prop + '": ');
      if(typeof propVal === "object"){
        response.push(getExampleString(propVal));

      }else if(typeof propVal === "number") {
        response.push(propVal);
      } else {
        response.push('"' + propVal + '"');
      }
      i++;

    }
    if(isArray) {
        response.push("]");
      } else {
        response.push("}");
      }
    return response.join("");
  }
  */


/*
  function getExampleHtml(example, indent) {
    var response = [],
      i = 0,
      prop,
      propVal,
      tab = "&nbsp;&nbsp;",
      indentStr = "";

      if(indent === undefined){
        indent = 0;

      } else {
        for() i=0;i<indent;i++){
          indentStr += tab;
        }
      }

      response.push(indentStr+"{<br/>");

    for (prop in example) {
      if (i != 0) {
        response.push(",<br/>");
      }
      propVal = example[prop];
      response.push(indentStr +tab +'"' + prop + '": ');
      if(typeof propVal === "object"){
        response.push(getExampleHtml(propVal,indent+1);

      }else{
      response.push('"' + propVal + '"');
      }
      i++;

    }
    response.push(indentStr +"}");
    return response.join("");
  }

*/ function getSchemaString(schema){
  var response = ["{<br/>"],
    prop,
    innerProp,
    subProp,
    stab = "&nbsp;&nbsp;",
    iter = 0;
  for(prop in schema){
    if(prop === 'properties'){
      response.push(stab+'"properties" : {</br>');
      for(innerProp in schema.properties){
        response.push(stab+stab+'"'+innerProp+'" : {<br/>');
        iter = 0;
        for(subProp in schema.properties[innerProp]){
          response.push(stab+stab+stab+'"'+subProp+'" : "'+schema.properties[innerProp][subProp]+'"')
          if(iter>0){
            response.push(",");
          }
          iter++;
          response.push("<br/>")
        }
        
        response.push(stab+stab+"},</br>");
        
      }
      response.push(stab+"},</br>");
    } else if(prop === 'required'){

        response.push(stab+'"'+prop+'" : ["'+schema[prop].join('","')+'"]<br/>');

    }else {
      response.push(stab+'"'+prop+'" : "'+schema[prop]+'",<br/>');
    }
  }
  response.push("}");
  return response.join("");
 }

  function validate(payload, schema) {
    var message,
      i,
      response = {
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
      noteLen = channelDef.notes.length;
      

    output.push('<h2 id="toc_0">' + schema.title + '</h2>');

    output.push('<h3 id="toc_1">Purpose:</h3>');

    output.push('<p>' + schema.description + '</p>');

    output.push('<h3 id="toc_2">Channel:</h3>');

    output.push('<p>' + schema.title + '</p>');

    output.push('<h3 id="toc_3">Payload:</h3>');

    output.push('<pre><code class="javascript">');
    output.push('{');
    for (prop in schema["properties"]) {

      if (i > 0) {
        output.push(", ");
      }
      output.push('<br/>');
      optional = checkRequired(prop, schema);
      output.push(prop + ": (" + optional + " | " + schema["properties"][prop].type + ")");

      i++;
    }
    i = 0;
    output.push('<br/>}');

    output.push('</code></pre>');
output.push('<h3 id="toc_3">Properties:</h4>');
    output.push('<table><thead><tr><th>Property</th><th>Required</th><th>type</th><th>Description</th></tr></thead><tbody>');

    for (prop in schema.properties) {

      propVal = schema.properties[prop];
      optional = checkRequired(prop, schema);
      output.push('<tr>');
      output.push('<td>' + prop + '</td>');
      output.push('<td>' + optional + '</td>');
      output.push('<td>' + propVal.type + '</td>');
      output.push('<td>' + propVal.description + '</td>');
      output.push('</tr>');

    }
    output.push('</tbody></table>');
    output.push('<h3 id="toc_3">Notes</h3>');
    if(noteLen > 0){
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
    output.push(getSchemaString(channelDef.schema));
    output.push('</code></pre>');

    

    return output.join("");
  }

  function appendExamples (exampleLink, examples, channelDef){
    var output = [],
      exampleLen,
      exampleValidation,
      validationIntent,
      i;

    if (examples !== undefined && examples !== null) {
      exampleLen = examples.length;
      if (exampleLen > 0) {
        output.push('<h3 id="toc_3">Examples</h3>');
        output.push('<h4 id="toc_4">Link</h4>');
        output.push('<p><a href="' + exampleLink + '" target="_blank">' + exampleLink + '</a></p>');
        for (i = 0; i < exampleLen; i++) {
          if(examples[i].valid === true){
            validationIntent = "Pass Validation";
          } else {
            validationIntent = "Fail Validation";
          }

          output.push('<h4 id="toc_4">' + examples[i].title + ' - '+validationIntent+'</h4>');
          
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
          
          output.push('</p><textarea rows="10" style="width: 100%">' + getExampleString(examples[i].payload) + '</textarea>');
        }
      }
    }
    return output.join("");
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
  publicInterface = {
    loadContent: function (target) {
        $('#main').html('<img src="img/loading.gif" />');
        switch (target.toLowerCase()) {
        case "cmapi.overview":
          loadOverview();
          break;
        default:
          loadChannelDef(target);
          break;
        }
      }
  };
  return publicInterface;
}());






