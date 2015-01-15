/*global window, cmapi */
// Declare cmajs into global namespace
// function wrapper provides a JavaScript closure so we can hide internal variables and functions while exposing a clean public interface
var cmajs = (function () {

  // private variables and functions here
  var initialized = false,
    listeners,
    runtimes,
    schemaLookup = {},
    readyCallbacks = [],
    cmajsInterface;

  function runReadyCallbacks() {
    var i,
      len = readyCallbacks.length;

    for (i = 0; i < len; i++) {
      readyCallbacks[i]();
    }
  }

  function handleMessageComplete(msg) {

  }

  function handleMessageProgress(msg) {

  }

  function getMessageContainer(args) {
    var mid,
      container;
    if (args.payload.hasOwnProperty("messageId")) {
      mid = args.payload.messageId;
    } else {
      mid = cmajsInterface.utils.getUUID();
    }

    function cancel() {
      cmajs.publish({
        channel: "map.message.cancel",
        payload: {
          messageId: messageId
        }
      });
    }
    container = {
      valid: false,
      errors: [],
      payload: args.payload,
      messageId: mid,
      channel: args.channel,
      cancel: cancel
    };
    return container;
  }

  runtimes = (function () {
    var runtimeLookup = {},
      runtimesInterface;

    runtimesInterface = {
      add: function (runtime) {
        runtimeLookup[runtime] = runtime;
      },
      remove: function (runtime) {
        delete runtimeLookup[runtime];
      },
      publish: function (args) {
        var rtKey,
          rt;

        for (rtKey in runtimeLookup) {
          if (runtimeLookup.hasOwnProperty(rtKey)) {
            rt = runtimeLookup[rtKey];
            if (rt !== undefined && rt !== null && rt.hasOwnProperty("publish")) {
              try {
                rt.publish(args);
              } catch (err) {
                cmajsInterface.utils.logError(err);
              }
            }
          }
        }
      },
      unsubscribe: function (args) {
        var rtKey,
          rt;

        for (rtKey in runtimeLookup) {
          if (runtimeLookup.hasOwnProperty(rtKey)) {
            rt = runtimeLookup[rtKey];
            if (rt !== undefined && rt !== null && rt.hasOwnProperty("unsubscribe")) {
              try {
                rt.unsubscribe(args);
              } catch (err) {
                cmajsInterface.utils.logError(err);
              }
            }
          }
        }
      },
      subscribe: function (args) {
        var rtKey,
          rt;

        for (rtKey in runtimeLookup) {
          if (runtimeLookup.hasOwnProperty(rtKey)) {
            rt = runtimeLookup[rtKey];
            if (rt !== undefined && rt !== null && rt.hasOwnProperty("subscribe")) {
              try {
                rt.subscribe(args);
              } catch (err) {
                cmajsInterface.utils.logError(err);
              }
            }
          }
        }
      }
    };
    return runtimesInterface;
  }());

  // define the public interface to the cmapi namespace
  cmajsInterface = {
    setup: {},
    utils: {},
    runtimes: {},
    channels: {
      MAP_DRAGDROP: "map.drag-drop",
      MAP_ERROR: "map.error",
      MAP_FEATURE_CLICKED: "map.feature.clicked",
      MAP_FEATURE_DESELECTED_BATCH: "map.feature.deselected.batch",
      MAP_FEATURE_DESELECTED: "map.feature.deselected",
      MAP_FEATURE_DRAW_PROGRESS: "map.feature.draw.progress",
      MAP_FEATURE_DRAW: "map.feature.draw",
      MAP_FEATURE_EDIT_PROGRESS: "map.feature.edit.progress",
      MAP_FEATURE_EDIT: "map.feature.edit",
      MAP_FEATURE_GET: "map.feature.get",
      MAP_FEATURE_HIDE: "map.feature.hide",
      MAP_FEATURE_MOUSEDOWN: "map.feature.mousedown",
      MAP_FEATURE_MOUSEUP: "map.feature.mouseup",
      MAP_FEATURE_PLOT_BATCH: "map.feature.plot.batch",
      MAP_FEATURE_PLOT: "map.feature.plot",
      MAP_FEATURE_PLOT_URL: "map.feature.plot.url",
      MAP_FEATURE_SELECTED_BATCH: "map.feature.selected.batch",
      MAP_FEATURE_SELECTED: "map.feature.selected",
      MAP_FEATURE_SHOW: "map.feature.show",
      MAP_FEATURE_UNPLOT_BATCH: "map.feature.unplot.batch",
      MAP_FEATURE_UNPLOT: "map.feature.unplot",
      MAP_FEATURE_UPDATE: "map.feature.update",
      MAP_GET: "map.get",
      MAP_MENU_CLICKED: "map.menu.clicked",
      MAP_MENU_CREATE: "map.menu.create",
      MAP_MENU_REMOVE: "map.menu.remove",
      MAP_MESSAGE_CANCEL: "map.message.cancel",
      MAP_MESSAGE_PROGRESS: "map.message.progress",
      MAP_OVERLAY_CLUSTER_ACTIVATE: "map.overlay.cluster.activate",
      MAP_OVERLAY_CLUSTER_DEACTIVATE: "map.overlay.cluster.deactivate",
      MAP_OVERLAY_CLUSTER_REMOVE: "map.overlay.cluster.remove",
      MAP_OVERLAY_CLUSTER_SET: "map.overlay.cluster.set",
      MAP_OVERLAY_CREATE: "map.overlay.create",
      MAP_OVERLAY_FEATURES_GET: "map.overlay.features.get",
      MAP_OVERLAY_GET: "map.overlay.get",
      MAP_OVERLAY_HIDE: "map.overlay.hide",
      MAP_OVERLAY_REMOVE: "map.overlay.remove",
      MAP_OVERLAY_SHOW: "map.overlay.show",
      MAP_OVERLAY_UPDATE: "map.overlay.update",
      MAP_STATUS_ABOUT: "map.status.about",
      MAP_STATUS_FORMAT: "map.status.format",
      MAP_STATUS_INITIALIZATION: "map.status.initialization",
      MAP_STATUS_REQUEST: "map.status.request",
      MAP_STATUS_SELECTED: "map.status.selected",
      MAP_STATUS_VIEW: "map.status.view",
      MAP_VIEW_AREA_SELECTED: "map.view.area.selected",
      MAP_VIEW_CENTER_BOUNDS: "map.view.center.bounds",
      MAP_VIEW_CENTER_FEATURE: "map.view.center.feature",
      MAP_VIEW_CENTER_LOCATION: "map.view.center.location",
      MAP_VIEW_CENTER_OVERLAY: "map.view.center.overlay",
      MAP_VIEW_CLICKED: "map.view.clicked",
      MAP_VIEW_MOUSEDOWN: "map.view.mousedown",
      MAP_VIEW_MOUSEUP: "map.view.mouseup",
      MAP_VIEW_ZOOM: "map.view.zoom"
    },
    schemas: {
      // register schemas at runtime.  This allows for adding new / custom schemas as needed
      append: function (schemas) {
        var key;
        for (key in schemas) {
          if (schemas.hasOwnProperty(key)) {
            schemaLookup[key] = schemas[key].schema;
          }
        }
      },
      retrieve: function (key) {
        return schemaLookup[key];
      }
    },
    ready: function (callback) {
      if (initialized === true) {
        callback();
      } else {
        readyCallback.push(callback);
      }
    },
    publish: function (args) {
      var messageContainer = {
          valid: false
        },
        schema;

      // Check if we will ban unknown properties in schema validation
      // JSON schema allows additional properties by default, but this can be set to strict in the tv4 JSON validator
      if (!args.hasOwnProperty("strict")) {
        args.strict = false;
      }
      schema = cmajsInterface.schemas.retrieve(args.channel);
      if (schema) {
        messageContainer = getMessageContainer(args);
        messageContainer = cmajsInterface.utils.validateMessage(messageContainer, args.strict, schema);
        if (messageContainer.valid === true) {
          if (args.hasOwnProperty("onComplete")) {
            listener.setItem(
              messageContainer.messageId, args.onComplete
            );
          }
          if (args.hasOwnProperty("onProgess")) {
            listener.setItem(messageContainer.messageId, args.onComplete);
          }
          runtimes.publish(messageContainer);
        }
      }
      return messageContainer;
    },
    subscribe: function (args) {
      var i,
        len;
      if (cmajsInterface.utils.isArray(args)) {
        len = args.length;
        for (i = 0; i < len; i++) {
          runtimes.subscribe(args[i]);
        }
      } else {
        runtimes.subscribe(args);
      }
    },
    unsubscribe: function (args) {
      var i,
        len;
      if (cmajsInterface.utils.isArray(args)) {
        len = args.length;
        for (i = 0; i < len; i++) {
          runtimes.unsubscribe(args[i]);
        }
      } else {
        runtimes.unsubscribe(args);
      }
    },
    init: function (args) {
      var i,
        len;
      if (cmapi && cmapi.hasOwnProperty("channel")) {
        cmajsInterface.schemas.append(cmapi.channel);
      }
      if (!initialized) {
        listeners = new cmajsInterface.utils.Hash();
        initialized = true;
        runReadyCallbacks();
        cmajsInterface.subscribe([{
          channel: "map.message.complete",
          callback: handleMessageComplete
        }, {
          channel: "map.message.progress",
          callback: handleMessageProgress
        }]);
      }
      if (args) {
        if (args.hasOwnProperty("runtimes")) {
          if (cmajsInterface.utils.isArray(args.runtimes)) {
            len = args.runtimes.length;
            for (i = 0; i < len; i++) {
              runtimes.add(args.runtimes[i]);
            }
          }
        }
      }
    }
  };
  /*
   * This retuns the public methods
   */
  return cmajsInterface;
}());
