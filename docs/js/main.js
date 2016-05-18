/*global cmapi_channel_renderer, cmapi */
$(function() {
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
                    "folder" : true,
                    "title": "Overview",
                    "expanded": true
                }, {
                    "key": "cmapi.core.general.requirements.overview",
                    "type": "overview",
                    "folder": true,
                    "title": "General Requirements",
                    "children": [{
                        "key": "cmapi.core.general.requirements.notation.overview",
                        "type": "overview",
                        "title": "Notation"
                    }, {
                        "key": "cmapi.core.general.requirements.overlays.overview",
                        "type": "overview",
                        "title": "Overlays"
                    }, {
                        "key": "cmapi.core.general.requirements.featureids.overview",
                        "type": "overview",
                        "title": "Features and Feature IDs"
                    }, {
                        "key": "cmapi.core.general.requirements.channelnaming.overview",
                        "type": "overview",
                        "title": "Channel Naming Convention"
                    }, {
                        "key": "cmapi.core.general.requirements.whentosend.overview",
                        "type": "overview",
                        "title": "When to Send Messages"
                    }, {
                        "key": "cmapi.core.general.requirements.payloads.overview",
                        "type": "overview",
                        "title": "Message Payloads"
                    }, {
                        "key": "cmapi.core.general.requirements.batch.overview",
                        "type": "overview",
                        "title": "Batch Behavior"
                    }, {
                        "key": "cmapi.core.general.requirements.latlon.overview",
                        "type": "overview",
                        "title": "Latitude and Longitude"
                    }, {
                        "key": "cmapi.core.general.requirements.errors.overview",
                        "type": "overview",
                        "title": "Errors"
                    }, {
                        "key": "cmapi.core.general.requirements.case.overview",
                        "type": "overview",
                        "title": "Case Sensitivity"
                    }, {
                        "key": "cmapi.core.general.requirements.coordref.overview",
                        "type": "overview",
                        "title": "Coordinate Reference System"
                    }]
                }, {
                    "key": "cmapi.core.overview",
                    "type": "overview",
                    "title": "Channels & Payloads",
                    "folder": true,
                    "expanded": true,
                    "children": [{
                        "key": "map.overlay.overview",
                        "type": "overview",
                        "folder": true,
                        "title": "map.overlay",
                        "children": [{
                            "key": "map.overlay.create",
                            "title": "map.overlay.create"
                        }, {
                            "key": "map.overlay.remove",
                            "title": "map.overlay.remove"
                        }, {
                            "key": "map.overlay.hide",
                            "title": "map.overlay.hide"
                        }, {
                            "key": "map.overlay.show",
                            "title": "map.overlay.show"
                        }, {
                            "key": "map.overlay.update",
                            "title": "map.overlay.update"
                        }, {
                            "key": "map.overlay.cluster.set",
                            "title": "map.overlay.cluster.set"
                        }, {
                            "key": "map.overlay.cluster.remove",
                            "title": "map.overlay.cluster.remove"
                        }, {
                            "key": "map.overlay.cluster.activate",
                            "title": "map.overlay.cluster.activate"
                        }, {
                            "key": "map.overlay.cluster.deactivate",
                            "title": "map.overlay.cluster.deactivate"

                        }]
                    }, {
                        "key": "map.feature.overview",
                        "type": "overview",
                        "folder": true,
                        "title": "map.feature",
                        "children": [{
                            "key": "map.feature.plot",
                            "title": "map.feature.plot"
                        }, {
                            "key": "map.feature.plot.batch",
                            "title": "map.feature.plot.batch"
                        }, {
                            "key": "map.feature.plot.url",
                            "title": "map.feature.plot.url"
                        }, {
                            "key": "map.feature.unplot",
                            "title": "map.feature.unplot"
                        }, {
                            "key": "map.feature.unplot.batch",
                            "title": "map.feature.unplot.batch"

                        }, {
                            "key": "map.feature.hide",
                            "title": "map.feature.hide"
                        }, {
                            "key": "map.feature.show",
                            "title": "map.feature.show"
                        }, {
                            "key": "map.feature.selected",
                            "title": "map.feature.selected"
                        }, {
                            "key": "map.feature.selected.batch",
                            "title": "map.feature.selected.batch"

                        }, {
                            "key": "map.feature.deselected",
                            "title": "map.feature.deselected"
                        }, {
                            "key": "map.feature.deselected.batch",
                            "title": "map.feature.deselected.batch"

                        }, {
                            "key": "map.feature.update",
                            "title": "map.feature.update"
                        }, {
                            "key": "map.feature.edit",
                            "title": "map.feature.edit"
                        }, {
                            "key": "map.feature.draw",
                            "title": "map.feature.draw"
                        }, {
                            "key": "map.feature.clicked",
                            "title": "map.feature.clicked"
                        }, {
                            "key": "map.feature.mousedown",
                            "title": "map.feature.mousedown"
                        }, {
                            "key": "map.feature.mouseup",
                            "title": "map.feature.mouseup"
                        }]
                    }, {
                        "key": "map.view.overview",
                        "type": "overview",
                        "folder": true,
                        "title": "map.view",
                        "children": [{
                            "key": "map.view.zoom",
                            "title": "map.view.zoom"
                        }, {

                            "key": "map.view.center.overlay",
                            "title": "map.view.center.overlay"
                        }, {
                            "key": "map.view.center.feature",
                            "title": "map.view.center.feature"
                        }, {
                            "key": "map.view.center.location",
                            "title": "map.view.center.location"
                        }, {
                            "key": "map.view.center.bounds",
                            "title": "map.view.center.bounds"

                        }, {
                            "key": "map.view.clicked",
                            "title": "map.view.clicked"
                        }, {
                            "key": "map.view.mousedown",
                            "title": "map.view.mousedown"
                        }, {
                            "key": "map.view.mouseup",
                            "title": "map.view.mouseup"
                        }, {
                            "key": "map.view.area.selected",
                            "title": "map.view.area.selected"

                        }]
                    }, {
                        "key": "map.status.overview",
                        "type": "overview",
                        "folder": true,
                        "title": "map.status",
                        "children": [{
                            "key": "map.status.request",
                            "title": "map.status.request"
                        }, {
                            "key": "map.status.view",
                            "title": "map.status.view"
                        }, {
                            "key": "map.status.format",
                            "title": "map.status.format "
                        }, {
                            "key": "map.status.about",
                            "title": "map.status.about "
                        }, {
                            "key": "map.status.selected",
                            "title": "map.status.selected "
                        }, {
                            "key": "map.status.initialization",
                            "title": "map.status.initialization"
                        }]
                    }, {
                        "key": "map.message.overview",
                        "type": "overview",
                        "folder": true,
                        "title": "map.message",
                        "children": [{
                            "key": "map.message.complete",
                            "title": "map.message.complete",
                            "status": "new"
                        }, {
                            "key": "map.message.complete.detials.overview",
                            "title": "map.message.complete Details Objects",
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
                                "title": "map.feature.selected.batch"
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
                                "key": "map.view.zoom.complete",
                                "title": "map.view.zoom"
                            }, {
                                "key": "map.view.center.overlay.complete",
                                "title": "map.view.center.overlay"
                            }, {
                                "key": "map.view.center.feature.complete",
                                "title": "map.view.center.feature"
                            }, {
                                "key": "map.view.center.location.complete",
                                "title": "map.view.center.location"
                            }, {
                                "key": "map.view.center.bounds.complete",
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
                            "title": "map.message.progress",
                            "status": "new"
                        }, {
                            "key": "map.message.progress.deatils.overview",
                            "title": "map.message.progress Details Objects",
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
                            "title": "map.message.cancel"
                        }]
                    }, {
                        "key": "map.error",
                        "title": "map.error"
                    }, {
                        "key": "map.get",
                        "title": "map.get"
                    }]
                }, {
                    "key": "map.feature.plot.formats.overview",
                    "type": "overview",
                    "title": "map.feature.plot Formats",
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
                    "key": "cmapi.extensions.overview",
                    "type": "overview",
                    "title": "CMAPI Compliance",
                    "folder": true,
                    "expanded": true,
                    "children": [{
                        "key": "cmapi.extensions.cluster.overview",
                        "type": "overview",
                        "title": "Core",
                        "children": []
                    }, {
                        "key": "cmapi.extensions.manipulation.overview",
                        "type": "overview",
                        "title": "User Manipulation",

                        "children": []
                    }, {
                        "key": "cmapi.extensions.cluster.overview",
                        "type": "overview",
                        "title": "Feature Clustering",
                        "children": [{
                            "key": "map.overlay.cluster.references",
                            "type": "overview",
                            "title": "Clustering References"
                        }, {
                            "key": "map.overlay.cluster.replaceableParameters",
                            "type": "overview",
                            "title": "Clustering Replaceable Parameters"
                        }]
                    }, {
                        "key": "cmapi.validation.overview",
                        "type": "overview",
                        "title": "Validating CMAPI messages",
                        "expanded": true
                    }, {
                        "key": "map.drag-drop",
                        "title": "Drag and Drop"
                    }, {

                        "key": "cmapi.widget-intents.overview",
                        "title": "OWF Widget Intents",
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
                activate: function(event, data) {
                    if (data.node.key !== "") {
                        cmapi_channel_renderer.loadContent(data.node);
                        location.hash = data.node.key;
                    }
                },
                dblclick: function(event, data) {
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
