cmapi.channel["cmapi.dataformat.geojson"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot - GeoJSON",
    "description": "The GeoJSON specification can be found at <a href=\"http://geojson.org/geojson-spec.html\" >http://geojson.org/geojson-spec.html</a>.  The Common Map Widget API specification extends the GeoJSON specification by adding the “style”, “name”, “id”, “description“, and “timePrimitive“ objects to the “Properties” object of the GeoJSON specification.  These extended objects ONLY apply to the GeoJSON Feature object.",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "name of the specific GeoJSON feature.  Generally used when the GeoJSON parent object is a featureCollection or feature objects."
      },
      "id": {
        "type": "string",
        "description": "a unique identifier for the feature object.  Though not required, it is RECOMMENDED. If the id of the GeoJSON Feature.properties.id is omitted, and part of a FeatureCollection, selection may not work for these features as they cannot be uniquely identified. "
      },
      "description": {
        "type": "string",
        "description": "user supplied content that appears in a pop-up balloon associated with the feature.  Can be plain text, or HTML formatted."
      },
      "timePrimitive": {
        "type": "object",
        "description": "",
        "properties": {
          "timeSpan": {
            "type": "object",
            "description": "",
            "properties": {
              "begin": {
                "type": "string",
                "format": "date-time",
                "description": "time stamp identifying the beginning of the time span (see timeStamp definition for format info). "
              },
              "end": {
                "type": "string",
                "format": "date-time",
                "description": "time stamp identifying the end of the time span (see timeStamp definition for format info)."
              }
            },
            "required": ["begin", "end"]
          },
          "timeStamp": {
            "type": "string",
            "format": "date-time",
            "description": "time stamp value expressed as yyyy-mm-ddThh:mm:ss.ssszzzzzz, where T is the separator between the date and the time, and the time zone is either Z (for UTC) or zzzzzz, which represents ±hh:mm in relation to UTC. Additionally, the value can be expressed as a date only."
          }
        }
      },
      "style": {
        "type": "object",
        "description": "",
        "properties": {
          "lineStyle": {
            "type": "object",
            "description": "",
            "properties": {
              "color": {
                "description": "Object representing CSS3 RGBA.  See Note 1 below for more info",
                "type": "object",
                "default": "No value sent results in default settings on the map.",
                "properties": {
                  "r": {
                    "description": "Integer value between 0 and 255 for red.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "g": {
                    "description": "Integer value between 0 and 255 for green.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "b": {
                    "description": "Integer value between 0 and 255 for green.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "a": {
                    "description": "Number value between 0.0 (fully transparent) to 1.0 (fully opaque).",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                  }
                },
                "required": [
                  "r",
                  "g",
                  "b",
                  "a"
                ]
              }
            },
            "required": ["color"]
          },
          "polyStyle": {
            "type": "object",
            "description": "",
            "properties": {
              "color": {
                "description": "Object representing CSS3 RGBA.  See Note 1 below for more info. ",
                "type": "object",
                "default": "No value sent results in default settings on the map.",
                "properties": {
                  "r": {
                    "description": "Integer value between 0 and 255 for red.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "g": {
                    "description": "Integer value between 0 and 255 for green.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "b": {
                    "description": "Integer value between 0 and 255 for blue.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "a": {
                    "description": "Number value between 0.0 (fully transparent) to 1.0 (fully opaque).",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                  }
                },
                "required": [
                  "r",
                  "g",
                  "b",
                  "a"
                ]
              }
            },
            "required": ["color"]
          },
          "iconStyle": {
            "type": "object",
            "description": "",
            "properties": {
              "url": {
                "type": "uri",
                "description": "URL to an image file that will be used for the icon for a point. If no URL is provided, result will be map’s default icon.",
              },
              "size": {
                "type": "integer",
                "description": "Size of the icon in pixels",
                "default": 32
              }
            },
            "required": ["url"]
          }
        }
      }
    }
  },
  "notes": [
    'See <a href=\"http://www.w3.org/wiki/CSS3/Color/RGBA" >http://www.w3.org/wiki/CSS3/Color/RGBA</a> for more info on RGBA.'
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added icon size property to iconStyle"
  }]
};