/*global cmajs */
(function () {
  if (cmajs && cmajs.utils) {
    cmajs.utils.getObjectFromSchema = function (jsonSchema) {
      var result = {},
        schemaObj;
      schemaObj = JSON.parse(jsonSchema);

      function iterateObject(obj) {
        var obProp,
          prop;
        for (obProp in obj) {
          if (obj.hasOwnProperty(obProp)) {
            prop = obProp[obProp];
          }
        }
      }
      try {
        result = iterateObject(schemaObj);
      } catch (err) {
        result = {};
        cmajs.utils.logMessage("An object template could not be generated from the JSON schema due to an error.  See the following error to find cause");
        cmajs.utils.logError(err);
      }
      return result;
    };
  }
}());
