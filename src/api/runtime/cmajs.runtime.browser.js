/*global cmajs */
(function () {

  var template = cmajs.utils.getRuntimeTemplate(),
    senderId = cmajs.utils.getUUID();

  template.name = "Browser";

  template.getInstanceId = function () {
    return senderId;
  };

  template.init = function (args) {
    if (args) {
      if (args.hasOwnProperty("initcallback")) {
        args.initcallback();
      }
    }
  };

  template.pubSub.publish = function (args) {
    var success = false;


    cmajs.runtime.browser.mediator.publish({
      channel: args.channel,
      message: args.message,
      sender: {
        id: senderId
      }
    });
    success = true;


    return success;
  };

  template.pubSub.subscribe = function (args) {
    var success = false;

    cmajs.runtime.browser.mediator.subscribe({
      channel: args.channel,
      callback: args.callback
    });
    success = true;

    return success;
  };

  template.pubSub.unsubscribe = function (args) {
    var success = false;

    cmajs.runtime.browser.mediator.unsubscribe({
      channel: args.channel,
      callback: args.callback
    });
    success = true;

    return success;
  };

  cmajs.runtimes.browser = template;

}());
