cmapi.channel["map.feature.plot.geojson"].description = {
  "description": "The GeoJSON specification can be found at <a href=\"http://geojson.org/geojson-spec.html\" >http://geojson.org/geojson-spec.html</a>.  The Common Map Widget API specification extends the GeoJSON specification by adding the “style”, “name”, “id”, “description“, and “timePrimitive“ objects to the “Properties” object of the GeoJSON specification.  These extended objects ONLY apply to the GeoJSON Feature object.",
  "properties": {
    "name": {
      "description": "name of the specific GeoJSON feature.  Generally used when the GeoJSON parent object is a featureCollection or feature objects.",
      "default": ""
    },
    "id": {
      "description": "a unique identifier for the feature object.  Though not required, it is RECOMMENDED. If the id of the GeoJSON Feature.properties.id is omitted, and part of a FeatureCollection, selection may not work for these features as they cannot be uniquely identified. ",
      "default": ""
    },
    "description": {
      "description": "user supplied content that appears in a pop-up balloon associated with the feature.  Can be plain text, or HTML formatted.",
      "default": ""
    },
    "timePrimitive": {
      "description": "",
      "default": "",
      "properties": {
        "timeSpan": {
          "description": "",
          "default": "",
          "properties": {
            "begin": {
              "description": "time stamp identifying the beginning of the time span (see timeStamp definition for format info). ",
              "default": ""
            },
            "end": {
              "description": "time stamp identifying the end of the time span (see timeStamp definition for format info).",
              "default": ""
            }
          }
        },
        "timeStamp": {
          "description": "time stamp value expressed as yyyy-mm-ddThh:mm:ss.ssszzzzzz, where T is the separator between the date and the time, and the time zone is either Z (for UTC) or zzzzzz, which represents ±hh:mm in relation to UTC. Additionally, the value can be expressed as a date only.",
          "default": ""
        }
      }
    },
    "style": {
      "description": "",
      "default": "",
      "properties": {
        "lineStyle": {
          "description": "",
          "default": "",
          "properties": {
            "color": {
              "description": "Object representing CSS3 RGBA.  See Note 1 below for more info",
              "default": "No value sent results in default settings on the map.",
              "properties": {
                "r": {
                  "description": "Integer value between 0 and 255 for red.",
                  "default": ""
                },
                "g": {
                  "description": "Integer value between 0 and 255 for green.",
                  "default": ""
                },
                "b": {
                  "description": "Integer value between 0 and 255 for green.",
                  "default": ""
                },
                "a": {
                  "description": "Number value between 0.0 (fully transparent) to 1.0 (fully opaque).",
                  "default": ""
                }
              }
            }
          }
        },
        "polyStyle": {
          "description": "",
          "default": "",
          "properties": {
            "color": {
              "description": "Object representing CSS3 RGBA.  See Note 1 below for more info. ",
              "default": "No value sent results in default settings on the map.",
              "properties": {
                "r": {
                  "description": "Integer value between 0 and 255 for red.",
                  "default": ""
                },
                "g": {
                  "description": "Integer value between 0 and 255 for green.",
                  "default": ""
                },
                "b": {
                  "description": "Integer value between 0 and 255 for blue.",
                  "default": ""
                },
                "a": {
                  "description": "Number value between 0.0 (fully transparent) to 1.0 (fully opaque).",
                  "default": ""
                }
              }
            }
          }
        },
        "iconStyle": {
          "description": "",
          "default": "",
          "properties": {
            "url": {
              "description": "URL to an image file that will be used for the icon for a point. If no URL is provided, result will be map’s default icon.",
              "default": ""
            },
            "size": {
              "description": "Size of the icon in pixels",
              "default": 32
            }
          }
        }
      }
    }
  }
};
