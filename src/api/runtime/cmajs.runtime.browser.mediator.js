/*global cmajs */
(function () {
  cmajs.runtimes.browser.mediator = (function () {
    var listeners = new cmajs.utils.Hash(),
      publicInterface = {

        subscribe: function (listenerInfo) {
          if (listeners.getItem(listenerInfo.channel) !== null && listeners.getItem(listenerInfo.channel) !== undefined) {
            listeners.getItem(listenerInfo.channel).push(listenerInfo.callback);
          } else {
            var callbacks = [];
            callbacks.push(listenerInfo.callback);
            listeners.setItem(listenerInfo.channel, callbacks);
          }
        },

        unsubscribe: function (listenerInfo) {
          var callbackArray,
            len,
            i;

          if (listeners.getItem(listenerInfo.channel) !== null && listeners.getItem(listenerInfo.channel) !== undefined) {
            callbackArray = listeners.getItem(listenerInfo.channel);
            len = callbackArray.length;

            for (i = 0; i < len; i += 1) {
              if (callbackArray[i] === listenerInfo.callback) {
                callbackArray.splice(i, 1);
                return true;
              }
            }
          }
          return false;
        },
        publish: function (message) {
          var callbacks = listeners.getItem(message.channel),
            len,
            i,
            success = {
              success: false,
              message: "An unanticipated error has occurred in cmajs.runtime.browser.mediator.dispatch"
            };

          try {
            if (typeof (message.message) === "string") {
              message.message = JSON.parse(message.message);
            }
            if (callbacks !== null && callbacks !== undefined) {
              len = callbacks.length;
              for (i = 0; i < len; i += 1) {
                if (callbacks[i] !== null) {
                  try {
                    callbacks[i](message.sender, message.message, message.channel);
                  } catch (ignore) {

                  }
                }
              }
            }
          } catch (err2) {

            success = {

              success: false,
              message: err2.toString()
            };
          }
          return success;
        }
      };

    return publicInterface;
  }());
}());
