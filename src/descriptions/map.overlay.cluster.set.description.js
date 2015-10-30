cmapi.channel["map.overlay.cluster.set"].description = {
  "description": "Sets the clustering rule for a specified overlay.",
  "properties": {
    "threshold": {
      "description": "The minimum number of features to form a cluster.  Default value is 2.",
      "defaultValue": 2
    },
    "distance": {
      "description": "Pixel distance between features that should be considered a single cluster. Default is 50.",
      "defaultValue": 50
    },
    "clusterStyle": {
      "description": "Styling information to be applied to cluster objects. All string based values (i.e., label, title, description, iconStyle.url) MUST support replacement as detailed in Appendix A.",
      "defaultValue": "",
      "properties": {
        "label": {
          "description": "The label to be placed on the clustered item. This SHOULD be rendered adjacent to an icon when using iconStyle or inside the point when using pointStyle. If no value is specified, then the map MUST NOT display a label.",
          "defaultValue": ""
        },
        "title": {
          "description": "The title used on the info bubble when the clustered item is clicked. If no value is specified, then the info bubble MUST NOT contain a title.  If a value is specified, then the title MUST be located at the top of the info bubble.",
          "defaultValue": ""
        },
        "summary": {
          "description": "The summary is specific to the cluster as a whole, and is used on the info bubble when the clustered item is clicked. If no value is specified, then the info bubble MUST NOT contain a summary. If a value is specified, the summary MUST be located below the title and above the description in the info bubble.",
          "defaultValue": ""
        },
        "description": {
          "description": "The description used on the info bubble when the clustered item is clicked. If no value is specified, then the pop-up bubble SHOULD contain a roll-up description of all clustered items based on default roll-up behavior of the map implementation. Whether specified or not, the description MUST be located below the summary in the info bubble. \n\r Examples of default roll-up behavior: the default roll-up description could be a list of items in the cluster by element name (e.g., element name in KML). When a user clicks the title of one of the items, the info bubble could display additional details of the item.  In addition, the bubble could simply contain a table or listing of all items in the cluster.",
          "defaultValue": ""
        },
        "pointStyle": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "color": {
              "description": "Object representing CSS3 RGBA.  No value sent results in default settings on the map.  See http://www.w3.org/wiki/CSS3/Color/RGBA for more info on RGBA. ",
              "defaultValue": "",
              "properties": {
                "r": {
                  "description": "Integer value between 0 and 255 for red.",
                  "defaultValue": ""
                },
                "g": {
                  "description": "Integer value between 0 and 255 for green.",
                  "defaultValue": ""
                },
                "b": {
                  "description": "Integer value between 0 and 255 for blue.",
                  "defaultValue": ""
                },
                "a": {
                  "description": "Numeric value between 0.0 and 1.0 for alpha.",
                  "defaultValue": ""
                }
              }
            },
            "radius": {
              "description": "Integer value representing the radius of the clustered point in pixels. Default value is 6.",
              "defaultValue": 6
            }
          }
        },
        "iconStyle": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "url": {
              "description": "URL to an image file that will be used for the icon for a point.  If no URL is provided, result will be map’s default icon.",
              "defaultValue": ""
            }
          }
        }
      }
    },
    "overlayId": {
      "description": "The ID of the overlay where the clustering rule is to be applied. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    }
  }
};
