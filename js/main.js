$(function () {
  var DT = $.ui.fancytree;
  $.ui.fancytree.debug("Using fancytree " + $.ui.fancytree.version);

  // attach to all instances
  $("#tree")
    .fancytree({
      source: {
        url: "cmapi-toc-1.2.0.json"
      },
      checkbox: false,
      selectMode: 1,
      icons: false,
      minExpandLevel: 1,
      activate: function (event, data) {
      	if(data.node.key !== ""){
      	 cmapi.channel.renderer.loadContent(data.node.key);
      	}
      },
      dblclick: function (event, data) {

        cmapi.channel.renderer.loadContent(data.node.key);
      }
    })
    .bind("fancytreeactivate", function (event, data) {
      $.ui.fancytree.debug("fancytreeactivate: event=", event, ", data=", data);
      return false;
    });

  cmapi.channel.renderer.loadContent("cmapi.overview");

});