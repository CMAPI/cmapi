/*global cmapi,console, cmajs */
(function () {
  function logMessage(message) {
    if (console && console.hasOwnProperty("log")) {
      console.log(message);
    }
  }

  cmajs.utils.logMessage = logMessage;
}());
