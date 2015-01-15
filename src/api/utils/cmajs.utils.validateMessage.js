/*global cmajs, tv4, cmapi */
(function () {
   
    function getValidationErrorString(valError, index, total) {
      var message,
        i;
      if (total <= 1) {
        message = "The message payload is not valid:  ";
      } else {
        message = "The message payload " + index + " of " + total + " is not valid:  ";
      }
      for (i = 0; i < valError.length; i++) {
        message += "\n " + valError[i].message + " " + valError[i].schemaPath + " " + valError[i].dataPath;
      }
      return message;
    }

    

    function validate(container, strict, schema) {
      var msg = container.payload,
        i,
        len,
        validation,
        isJson = false,
        response = container;

      if (typeof msg === "string") {
        try {
          msg = JSON.parse(msg);
          isJson = true;
        } catch (e) {
          cmajs.utils.logError(e);
        }
      } else if (typeof msg === "object") {
        isJson = true;
      }
      if (isJson === true) {
        if (strict !== true) {
          strict = false;
        }
        if (!cmajs.utils.isArray(msg)) {
          msg = [msg];
        }
        len = msg.length;
        for (i = 0; i < len; i++) {
          validation = tv4.validateMultiple(msg[i], schema, true, strict);
          response.valid = validation.valid;
          if (validation.valid === false) {
            response.errors.push(getValidationErrorString(validation.errors, i, len));
          }
        }
      }
      return response;
    }
    // append to cmajs.utils namespace
   cmajs.utils.validateMessage = validate;
}());
