cmapi.channel["map.feature.plot.geojson"].description = {
  "description": "The GeoJSON specification can be found at <a href=\"http://geojson.org/geojson-spec.html\" >http://geojson.org/geojson-spec.html</a>.  The Common Map Widget API specification extends the GeoJSON specification by adding the “style”, “name”, “id”, “description“, and “timePrimitive“ objects to the “Properties” object of the GeoJSON specification.  These extended objects ONLY apply to the GeoJSON Feature object.",
  "properties": {
    "name": {
      "description": "name of the specific GeoJSON feature.  Generally used when the GeoJSON parent object is a featureCollection or feature objects.",
      "defaultValue": ""
    },
    "id": {
      "description": "a unique identifier for the feature object.  Though not required, it is RECOMMENDED. If the id of the GeoJSON Feature.properties.id is omitted, and part of a FeatureCollection, selection may not work for these features as they cannot be uniquely identified. ",
      "defaultValue": ""
    },
    "description": {
      "description": "user supplied content that appears in a pop-up balloon associated with the feature.  Can be plain text, or HTML formatted.",
      "defaultValue": ""
    },
    "timePrimitive": {
      "description": "",
      "defaultValue": "",
      "properties": {
        "timeSpan": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "begin": {
              "description": "time stamp identifying the beginning of the time span (see timeStamp definition for format info). ",
              "defaultValue": "",
			  "allowableValues" : "valid time in format of yyyy-mm-ddThh:mm:ss.ssszzzzzz, yyyy-mm-ddThh:mm:ss.sssZ, yyyy-mm-dd"
            },
            "end": {
              "description": "time stamp identifying the end of the time span (see timeStamp definition for format info).",
              "defaultValue": "",
			   "allowableValues" : "valid time in format of yyyy-mm-ddThh:mm:ss.ssszzzzzz, yyyy-mm-ddThh:mm:ss.sssZ, yyyy-mm-dd"
            }
          }
        },
        "timeSpans": {
          "description": "An array of timespan objects with a begin dateTime and end dateTime property representing the spans of time the map visualization is filtering",
          "defaultValue": ""
        },
        "timeStamp": {
          "description": "time stamp value expressed as yyyy-mm-ddThh:mm:ss.ssszzzzzz, where T is the separator between the date and the time, and the time zone is either Z (for UTC) or zzzzzz, which represents ±hh:mm in relation to UTC. Additionally, the value can be expressed as a date only.",
          "defaultValue": "",
		  "allowableValues" : "valid time in format of yyyy-mm-ddThh:mm:ss.ssszzzzzz, yyyy-mm-ddThh:mm:ss.sssZ, yyyy-mm-dd"
        }
      }
    },
    "style": {
      "description": "",
      "defaultValue": "",
      "properties": {
        "lineStyle": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "color": {
              "description": "Object representing CSS3 RGBA.  See Note 1 below for more info",
              "defaultValue": "No value sent results in default settings on the map.",
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
                  "description": "Integer value between 0 and 255 for green.",
                  "defaultValue": ""
                },
                "a": {
                  "description": "Number value between 0.0 (fully transparent) to 1.0 (fully opaque).",
                  "defaultValue": ""
                }
              }
            }
          }
        },
        "polyStyle": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "color": {
              "description": "Object representing CSS3 RGBA.  See Note 1 below for more info. ",
              "defaultValue": "No value sent results in default settings on the map.",
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
                  "description": "Number value between 0.0 (fully transparent) to 1.0 (fully opaque).",
                  "defaultValue": ""
                }
              }
            }
          }
        },
        "iconStyle": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "url": {
              "description": "URL to an image file that will be used for the icon for a point. If no URL is provided, result will be map’s default icon.",
              "defaultValue": ""
            },
            "size": {
              "description": "Size of the icon in pixels",
              "defaultValue": 32
            }
          }
        }
      }
    }
  }
};
