/*global cmapi, cmajs */
(function () {

  function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
  }
  // append to cmajs.utils namespace
  cmajs.utils.isArray = isArray;
}());
