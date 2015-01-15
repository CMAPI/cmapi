/*global cmajs, tv4 */

  // Verify that the tv4 JSON schema validation library is avaialbe in current application
  if (!tv4) {
    cmajs.utils.logMessage("tv4 is not availble and required to use the cmajs library.  Please include tv4.js on the page bdofre the cmajs include.  See https://github.com/geraintluff/tv4 or use the tv4.min.js file located in the libs driectory of the cmajs project");
  }
  // Initilize cmajs library to load schemas and perfrom setup
  cmajs.init();

