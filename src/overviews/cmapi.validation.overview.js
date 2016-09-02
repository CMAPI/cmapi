cmapi.overview["cmapi.validation.overview"] = {
  "title": "Validating CMAPI messages with JSON Schemas",
  "sections": [{
    "title": "Overview",
    "paragraphs": [
      "The same JSON schema files that are used to generate this documentation can also be used to validate CMAPI messages in your application.  You can test validation for each channel in the examples section on the channels documentation page.",
      "The minified distributable file with all of the CMAPI schemas is located <a href='../dist/cmapi.schema.min.js'>here</a>.",
      "<pre><code id='sampleCodeBox' class='javascript'>// cmapi.channels is defined in cmapi.schemas.min.js\n// Use the channel as the key to retrieve the correct schema\n  var schema = cmapi.channel[\"map.feature.plot\"];\n  // Create a map.feature.plot payload to validate\n  var payload ={\n    \"overlayId\": \"2d882141-0d9e-59d4-20bb-58e6d0460699.1\",\n    \"featureId\": \"example.geojson.1\",\n    \"format\": \"geojson\",\n    \"feature\": {\n      \"type\": \"Feature\",\n      \"geometry\": {\n          \"type\": \"Polygon\",\n          \"coordinates\": [[100,0],[101,0],[101,1],[100,1],[100,0]]\n      }\n    },\n    \"name\": \"Sample GeoJSON Feature\",\n    \"zoom\": true,\n    \"readOnly\": false\n  }\n// validate the payload against the schema using tv4 -  an open source javaScript JSON schema validation library\n// https://github.com/geraintluff/tv4\n  var validation =  tv4.validateMultiple(payload, schema, true);\n  if(validation.valid === true){\n    alert(\"the payload is valid\");\n  } else {\n    var errorMessage = validation.errors[0].message + \" \" + validation.errors[0].dataPath; \n    alert(\"the payload is NOT valid! \"+errorMessage);\n  }</code></pre>",
      "<a href='javascript:eval($(\"#sampleCodeBox\").html());'>Run the code sample </a>"
    ]
  }]
};
