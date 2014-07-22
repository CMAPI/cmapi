$(function () {
  var DT = $.ui.fancytree;
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
      	if(data.node.key !== ""){
      	 cmapi.channel.renderer.loadContent(data.node);
      	}
      },
      dblclick: function (event, data) {

        cmapi.channel.renderer.loadContent(data.node);
      }
    });

  cmapi.channel.renderer.loadContent({data: {type: "overview"}, key:"cmapi.overview"});

});