/*global cmajs */
(function () {
  // Keep track of used ids to make sure we never use the same id twice in one session
  var usedIds = {};

  function repFunc(c) {
    var r = Math.random() * 16 | 0,
      v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  }

  function generateUUID() {
      var isUsed = true,
        uuid;
      while (isUsed) {
        uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, repFunc);
        if (!usedIds[uuid]) {
          usedIds[uuid] = uuid;
          isUsed = false;
        }
      }
      return uuid;
    }
    // append this function to the cmajs.utils namespace
  cmajs.utils.getUUID = generateUUID;
}());
