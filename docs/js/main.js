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
        source: [{
          "key": "cmapi.overview",
          "type": "overview",
          "title": "Overview",
          "expanded": true
        },{
          "key": "cmapi.changelog",
          "type": "overview",
          "title": "Changes in v1.3.0",
          "expanded": true
        },{
          "key": "cmapi.validation.overview",
          "type": "overview",
          "title": "Validating CMAPI messages",
          "expanded": true
        }, {
          "key": "cmapi.core.overview",
          "type": "overview",
          "title": "CMAPI Core (Required)",
          "folder": true,
          "expanded": true,
          "children": [{
            "key": "map.overview",
            "type": "overview",
            "title": "map",
            "expanded": true,
            "children": [{
              "key": "map.overlay.overview",
              "type": "overview",
              "title": "overlay",
              "children": [{
                "key": "map.overlay.create",
                "title": "create"
              }, {
                "key": "map.overlay.remove",
                "title": "remove"
              }, {
                "key": "map.overlay.hide",
                "title": "hide"
              }, {
                "key": "map.overlay.show",
                "title": "show"
              }, {
                "key": "map.overlay.update",
                "title": "update"
              }]
            }, {
              "key": "map.feature.overview",
              "type": "overview",
              "title": "feature",
              "children": [{
                "key": "map.feature.plot",
                "title": "plot",
                "children": [{
                  "key": "map.feature.plot.batch",
                  "title": "batch"
                }, {
                  "key": "map.feature.plot.url",
                  "title": "url"
                }]
              }, {
                "key": "map.feature.unplot",
                "title": "unplot",
                "children": [{
                  "key": "map.feature.unplot.batch",
                  "title": "batch"
                }]
              }, {
                "key": "map.feature.hide",
                "title": "hide"
              }, {
                "key": "map.feature.show",
                "title": "show"
              }, {
                "key": "map.feature.selected",
                "title": "selected",
                "children": [{
                  "key": "map.feature.selected.batch",
                  "title": "batch"
                }]
              }, {
                "key": "map.feature.deselected",
                "title": "deselected",
                "children": [{
                  "key": "map.feature.deselected.batch",
                  "title": "batch"
                }]
              }, {
                "key": "map.feature.update",
                "title": "update"
              }]
            }, {
              "key": "map.view.overview",
              "type": "overview",
              "title": "view",
              "children": [{
                "key": "map.view.zoom",
                "title": "zoom"
              }, {
                "key": "map.view.center.overview",
                "type": "overview",
                "title": "center",
                "children": [{
                  "key": "map.view.center.overlay",
                  "title": "overlay"
                }, {
                  "key": "map.view.center.feature",
                  "title": "feature"
                }, {
                  "key": "map.view.center.location",
                  "title": "location"
                }, {
                  "key": "map.view.center.bounds",
                  "title": "bounds"
                }]
              }, {
                "key": "map.view.clicked",
                "title": "clicked"
              }]
            }, {
              "key": "map.status.overview",
              "type": "overview",
              "title": "status",
              "children": [{
                "key": "map.status.request",
                "title": "request"
              }, {
                "key": "map.status.view",
                "title": "view"
              }, {
                "key": "map.status.format",
                "title": "format "
              }, {
                "key": "map.status.about",
                "title": "about "
              }, {
                "key": "map.status.selected",
                "title": "selected "
              }, {
                "key": "map.status.initialization",
                "title": "initialization"
              }]
            }, {
              "key": "map.error",
              "title": "error"
            }]
          }]
        }, {
          "key": "cmapi.extensions.overview",
          "type": "overview",
          "title": "CMAPI Extensions (Optional)",
          "folder": true,
          "expanded": true,
          "children": [{
            "key": "cmapi.extensions.cluster.overview",
            "type": "overview",
            "title": "Feature Clustering",
            "children": [{
              "key": "map.overview",
              "type": "overview",
              "title": "map",
              "children": [{
                "key": "map.overlay.overview",
                "type": "overview",
                "title": "overlay",
                "children": [{
                  "key": "map.overlay.cluster.overview",
                  "type": "overview",
                  "title": "cluster",
                  "children": [{
                    "key": "map.overlay.cluster.set",
                    "title": "set"
                  }, {
                    "key": "map.overlay.cluster.remove",
                    "title": "remove"
                  }, {
                    "key": "map.overlay.cluster.activate",
                    "title": "activate"
                  }, {
                    "key": "map.overlay.cluster.deactivate",
                    "title": "deactivate"
                  }]
                }]
              }]
            }, {
              "key": "map.overlay.cluster.references",
              "type": "overview",
              "title": "Clustering References"
            }, {
              "key": "map.overlay.cluster.replaceableParameters",
              "type": "overview",
              "title": "Clustering Replaceable Parameters"
            }]
          }, {
            "key": "cmapi.extensions.manipulation.overview",
            "type": "overview",
            "title": "User Manipulation",

            "children": [{
              "key": "map.overview",
              "type": "overview",
              "title": "map",

              "children": [{
                "key": "map.message.overview",
                "type": "overview",
                "title": "message",
                "children": [{
                  "key": "map.message.complete",
                  "title": "complete",
                  "status": "new",
                  "children": [{
                    "key": "map.feature.update.complete",
                    "title": "map.feature.update"
                  }, {
                    "key": "map.overlay.remove.complete",
                    "title": "map.overlay.remove"
                  }, {
                    "key": "map.overlay.hide.complete",
                    "title": "map.overlay.hide"
                  }, {
                    "key": "map.overlay.show.complete",
                    "title": "map.overlay.show"
                  }, {
                    "key": "map.overlay.update.complete",
                    "title": "map.overlay.update"
                  }, {
                    "key": "map.feature.plot.complete",
                    "title": "map.feature.plot"
                  }, {
                    "key": "map.feature.plot.batch.complete",
                    "title": "map.feature.plot.batch"
                  }, {
                    "key": "map.feature.plot.url.complete",
                    "title": "map.feature.plot.url"
                  }, {
                    "key": "map.feature.unplot.complete",
                    "title": "map.feature.unplot"
                  }, {
                    "key": "map.feature.unplot.batch.complete",
                    "title": "map.feature.unplot.batch"
                  }, {
                    "key": "map.feature.hide.complete",
                    "title": "map.feature.hide"
                  }, {
                    "key": "map.feature.show.complete",
                    "title": "map.feature.show"
                  }, {
                    "key": "map.feature.selected.complete",
                    "title": "map.feature.selected"
                  }, {
                    "key": "map.feature.selected.batch.complete",
                    "title": "map.feature.selected.batc"
                  }, {
                    "key": "map.feature.update.complete",
                    "title": "map.feature.update"
                  }, {
                    "key": "map.feature.deselected.complete",
                    "title": "map.feature.deselected"
                  }, {
                    "key": "map.feature.deselected.batch.complete",
                    "title": "map.feature.deselected.batch"
                  }, {
                    "key": "map.view.complete",
                    "title": "map.view.zoom"
                  }, {
                    "key": "map.view.complete",
                    "title": "map.view.center.overlay"
                  }, {
                    "key": "map.view.complete",
                    "title": "map.view.center.feature"
                  }, {
                    "key": "map.view.complete",
                    "title": "map.view.center.location"
                  }, {
                    "key": "map.view.complete",
                    "title": "map.view.center.bounds"
                  }, {
                    "key": "map.feature.edit.complete",
                    "title": "map.feature.edit.complete"
                  }, {
                    "key": "map.feature.draw.complete",
                    "title": "map.feature.draw.complete"
                  }, {
                    "key": "map.get.complete",
                    "title": "map.get.complete"
                  }]
                }, {
                  "key": "map.message.progress",
                  "title": "progress",
                  "status": "new",
                  "children": [{
                    "key": "map.feature.edit.progress",
                    "title": "map.feature.edit"
                  }, {
                    "key": "map.feature.draw.progress",
                    "title": "map.feature.draw"
                  }]
                }, {
                  "key": "map.message.cancel",
                  "title": "cancel"
                }]
              }, {
                "title": "feature",
                "key": "map.feature.overview",
                "type": "overview",
                "children": [{
                  "key": "map.feature.edit",
                  "title": "edit"
                }, {
                  "key": "map.feature.draw",
                  "title": "draw"
                }, {
                  "key": "map.feature.clicked",
                  "title": "clicked"
                }, {
                  "key": "map.feature.mousedown",
                  "title": "mousedown"
                }, {
                  "key": "map.feature.mouseup",
                  "title": "mouseup"
                }]
              }, {
                "title": "view",
                "key": "map.view.overview",
                "type": "overview",
                "children": [{
                  "key": "map.view.mousedown",
                  "title": "mousedown"
                }, {
                  "key": "map.view.mouseup",
                  "title": "mouseup"
                }, {
                  "title": "area",
                  "key": "",
                  "children": [{
                    "key": "map.view.area.selected",
                    "title": "selected"
                  }]
                }]
              }, {
                "key": "map.menu.overview",
                "type": "overview",
                "title": "menu",
                "children": [{
                  "key": "map.menu.create",
                  "title": "create"
                }, {
                  "key": "map.menu.clicked",
                  "title": "clicked"
                }, {
                  "key": "map.menu.remove",
                  "title": "remove"
                }]
              }, {
                "key": "map.get",
                "title": "get"
              }]
            }]
          }]
        }, {
          "key": "map.feature.plot.formats.overview",
          "type": "overview",
          "title": "map.feature Data Formats",
          "expanded": true,
          "folder": true,
          "children": [{
            "key": "map.feature.plot.kml",
            "type": "overview",
            "title": "A. KML Support (Required)"
          }, {
            "key": "map.feature.plot.geojson",
            "title": "B. GeoJSON Support (Required)"
          }, {
            "key": "map.feature.plot.aoi",
            "title": "C. Area of Interest Support (Optional)"
          }, {
            "expanded": true,
            "key": "map.feature.plot.symbol",
            "title": "D. Symbology (Optional)",
            "children": [{
              "key": "map.feature.plot.2525b",
              "title": "1. MIL-STD-2525 B (Optional)"
            }, {
              "key": "map.feature.plot.2525c",
              "title": "2. MIL-STD-2525 C (Optional)" 
            }]
          }]

        }, {
          "key": "cmapi.runtimes.overview",
          "title": "Runtime Extensions (Optional)",
          "type": "overview",
          "folder": true,
          "expanded": true,
          "children": [{
            "key": "map.drag-drop",
            "title": "Drag and Drop"
          }, {
            "key": "cmapi.runtimes.owf.overview",
            "title": "Ozone Widget Framework (OWF)",
            "type": "overview",
            "children": [{

              "key": "cmapi.widget-intents.overview",
              "title": "Widget Intents",
              "type": "overview",
              "children": [{
                "key": "cmapi.widget-intents.pick.overview",
                "title": "Picking a Common Map Widget",
                "type": "overview"
              }, {
                "key": "cmapi.widget-intents.view.overview",
                "title": "Viewing Data ",
                "type": "overview"
              }, {
                "key": "cmapi.widget-intents.plot.overview",
                "title": "Plotting Data ",
                "type": "overview"
              }]
            }]
          }]
        }, {
          "key": "cmapi.appendecies.overview",
          "type": "overview",
          "title": "Appendices",
          "expanded": true,
          "folder": true,
          "children": [{
            "key": "cmapi.appendix.a",
            "type": "overview",
            "title": "A. Unique Identifiers"
          }, {
            "key": "cmapi.acronyms",
            "type": "overview",
            "title": "B. Acronyms"
          }, {
            "key": "cmapi.references",
            "type": "overview",
            "title": "C. References"
          }]
        }],
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
