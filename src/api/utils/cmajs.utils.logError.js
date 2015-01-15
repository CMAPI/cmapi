/*global cmapi, cmajs */
(function () {
  function logError(error) {
    if (console && console.hasOwnProperty("error")) {
      console.error(error);
    }
  }
  cmajs.utils.logError = logError;
}());
