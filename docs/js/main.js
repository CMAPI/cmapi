/*global cmapi_channel_renderer, cmapi */
$(function () {
  //var DT = $.ui.fancytree;
  if (!document.addEventListener) {
    var message = "You are using a browser that does not support modern web capabilities.  Please use a browser such as Firefox, Chrome, Safari, or IE 9(or newer) to view this page.";
    alert(message);
    $("body").html('<p style="color: #FF0000">' + message + '</p>');
  } else {
    $.ui.fancytree.debug("Using fancytree " + $.ui.fancytree.version);
    // attach to all instances
    $("#tree")
      .fancytree({
        source: {
          url: "cmapi-toc.json"
        },
        checkbox: false,
        selectMode: 1,
        icons: false,
        minExpandLevel: 1,
        activate: function (event, data) {
          if (data.node.key !== "") {
            cmapi_channel_renderer.loadContent(data.node);
            location.hash = data.node.key;
          }
        },
        dblclick: function (event, data) {
          cmapi_channel_renderer.loadContent(data.node);
          location.hash = data.node.key;
        }
      });
    var defaultView = location.hash; //queryStringUtil.getParameterByName("view");
    if (defaultView !== "") {
      defaultView = defaultView.replace("#", "");
      if (cmapi.overview.hasOwnProperty(defaultView)) {
        cmapi_channel_renderer.loadContent({
          data: {
            type: "overview"
          },
          key: defaultView
        });
      } else if (cmapi.channel.hasOwnProperty(defaultView)) {
        cmapi_channel_renderer.loadContent({
          data: {},
          key: defaultView
        });
      }
    } else {
      cmapi_channel_renderer.loadContent({
        data: {
          type: "overview"
        },
        key: "cmapi.overview"
      });
    }
  }
});
