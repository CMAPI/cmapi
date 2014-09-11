/*global window, owf, OWF, tv4, Ozone, alert */
var cmapi = window.cmapi || {};

cmapi.channelList = [
  "map.overlay.create",
  "map.overlay.remove",
  "map.overlay.hide",
  "map.overlay.show",
  "map.overlay.style",
  "map.overlay.update",
  "map.overlay.cluster.activate",
  "map.overlay.cluster.deactivate",
  "map.overlay.cluster.remove",
  "map.overlay.cluster.set",
  "map.feature.plot",
  "map.feature.plot.batch",
  "map.feature.plot.url",
  "map.feature.unplot",
  "map.feature.unplot.batch",
  "map.feature.hide",
  "map.feature.show",
  "map.feature.update",
  "map.feature.selected",
  "map.feature.selected.batch",
  "map.feature.deselected",
  "map.feature.deselected.batch",
  "map.feature.draw",
  "map.feature.edit",
  "map.feature.clicked",
  "map.view.zoom",
  "map.view.center.overlay",
  "map.view.center.feature",
  "map.view.center.location",
  "map.view.center.bounds",
  "map.view.clicked",
  "map.view.area.selected",
  "map.status.request",
  "map.status.selected",
  "map.status.view",
  "map.status.format",
  "map.status.about",
  "map.status.selected",
  "map.status.initialization",
  "map.error",
  "map.message.complete",
  "map.message.progress",
  "map.message.cancel",
  "map.menu.create",
  "map.menu.clicked",
  "map.menu.remove",
  "map.get"
];

cmapi.channelValidation = (function () {
  // interface returned from singleton function stance to enfors public / private member access
  var publicInterface,
    // Private array of messages that fail validation and the error
    failures = [],
    failureLookup = {},
    environment = {
      pubSub: {}
    },
    msgTotal = 0,
    errorTotal = 0;

  function getValidationErrorString(valError, channel, index, total) {
    var message,
      i;
    if (total <= 1) {
      message = "The " + channel + " message is not valid:  ";
    } else {
      message = "The " + channel + " message payload " + index + " of " + total + " is not valid:  ";
    }
    for (i = 0; i < valError.errors.length; i++) {
      message += "\n " + valError.errors[i].message + " " + valError.errors[i].schemaPath + " " + valError.errors[i].dataPath;
    }
    /*
    for (i = 0; i < valError.missing.length; i++) {
      message += "\n " + valError.missing[i].message + "\n  Schema Path: " + valError.errors[i].schemaPath;
    }
    */
    return message;
  }

  publicInterface = {
    subscribe: function (channels) {
      environment.pubSub = new Ozone.eventing.Widget('rpc_relay.uncompressed.html');
      var len, i;
      len = channels.length;
      for (i = 0; i < len; i++) {
        environment.pubSub.subscribe(channels[i], cmapi.channelValidation.validateMessage);
      }
    },
    view: function (id) {
      var msgError = failureLookup[id];
      if (msgError !== undefined && msgError !== null) {
        alert(JSON.stringify(msgError));
      }
    },
    clear: function () {
      $('#outputDiv').html('<table id="errorTable"><tr><th>Date</th><th>Channel</th><th>Error</th><th>View</th></tr></table>');
    },
    validateMessage: function (sender, msg, channel) {
      var response = {
          valid: true,
          message: "Valid CMAPI Payload"
        },
        schema,
        valid,
        len,
        i,
        html = [],
        output,
        failure,
        id,
        additionalProperties = parseInt($("#allow-additional-select").val(), 10),
        banUnknown = false;

      msgTotal++;

      if (typeof msg === "string") {
        msg = JSON.parse(msg);
      }
      schema = cmapi.channel[channel].schema;
      if (additionalProperties === 1) {
        banUnknown = true;
      }
      if (!$.isArray(msg)) {
        msg = [msg];
      }
      len = msg.length;
      for (i = 0; i < len; i++) {
        valid = tv4.validateMultiple(msg[i], schema, true, banUnknown);

        if (!valid.valid) {
          errorTotal++;
          response.message = getValidationErrorString(valid, channel, i, len);
          response.valid = false;
          id = "error_" + failures.length;
          failure = {
            msg: msg[i],
            sender: sender,
            channel: channel,
            error: response.message,
            date: new Date(),
            id: id
          };
          failures.push(failure);
          failureLookup[failure.id] = failure;
          //$("#outputTA").val($("#outputTA").val() + response.message + "<\n>");
          html.push("<tr>");
          html.push("<td>" + failure.date.toUTCString() + "</td>");
          html.push("<td>" + failure.channel + "</td>");
          html.push("<td>" + failure.error + "</td>");
          html.push('<td><button onclick="cmapi.channelValidation.view(\'' + failure.id + '\')">View</button></td>');
          html.push("</tr>");
          output = html.join("");
          $('#errorTable tr:last').after(output);
        }

        $('#totalsSpan').text(errorTotal + " of " + msgTotal + " message payloads have errors.  See errors below.");
      }
      return response;
    }

  };
  return publicInterface;
}());

$(function () {
  OWF.ready(function () {
    cmapi.channelValidation.subscribe(cmapi.channelList);

  });
});
