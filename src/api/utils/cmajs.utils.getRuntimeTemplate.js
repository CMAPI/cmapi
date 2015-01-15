/*global cmajs */
(function () {
   function template () {

    var runtimeInterface = {

      init: function () {
        // Create ane EMP Error to notify system that this capability has not been implemented
        cmajs.utils.logMessage("The init method has not been implemented by this environment");
        // Return false as the initialization failed
        return false;
      },

      destroy: function () {
        // Create ane EMP Error to notify system that this capability has not been implemented
        cmajs.utils.logMessage("The destroy method has not been implemented by this environment");
        // Return false as the envirnment could not be destroyed
        return false;
      },

      pubSub: {

        publish: function () {
          // Create ane EMP Error to notify system that this capability has not been implemented
          cmajs.utils.logMessage("pubSub.publish has not been implemented by this environment");
          // Return false for failure to publish
          return false;
        },

        subscribe: function () {
          // Create ane EMP Error to notify system that this capability has not been implemented
          cmajs.utils.logMessage("pubSub.subscribe has not been implemented by this environment");
          // Return false for failure to publish
          return false;
        },

        unsubscribe: function () {
          // Create ane EMP Error to notify system that this capability has not been implemented
          cmajs.utils.logMessage("pubSub.unsubscribe has not been implemented by this environment");
          // Return false for failure to publish
          return false;
        }
      },

      getInstanceId: function () {
        // Create ane EMP Error to notify system that this capability has not been implemented
        cmajs.utils.logMessage("getInstanceId has not been implemented by this environment");
        // Return null as the requested pref could not be returned
        return undefined;
      },

      name: "Unnamed Environment",
      version: "1.0.0",
      sender: {
        id: cmajs.utils.getUUID()
      }
    };


    // returns a copy of the runtimeInterface template object that will have
    // its methods and properties overridden by an runtime definition
    return runtimeInterface;
  }
  // append to cmajs.runtime namespcae
  cmajs.utils.getRuntimeTemplate = template;
}());
