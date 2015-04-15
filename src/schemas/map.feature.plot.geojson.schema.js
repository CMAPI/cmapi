cmapi.channel["map.feature.plot.geojson"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.geojson",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "id": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "timePrimitive": {
        "type": "object",
        "properties": {
          "timeSpan": {
            "type": "object",
            "properties": {
              "begin": {
                "type": "string",
                "format": "date-time"
              },
              "end": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": ["begin", "end"]
          },
          "timeStamp": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "style": {
        "type": "object",
        "properties": {
          "lineStyle": {
            "type": "object",
            "properties": {
              "color": {
                "type": "object",
                "default": "No value sent results in default settings on the map.",
                "properties": {
                  "r": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "g": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "b": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "a": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                  }
                },
                "required": ["r", "g", "b", "a"]
              }
            },
            "required": ["color"]
          },
          "polyStyle": {
            "type": "object",
            "properties": {
              "color": {
                "type": "object",
                "default": "No value sent results in default settings on the map.",
                "properties": {
                  "r": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "g": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "b": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "a": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                  }
                },
                "required": ["r", "g", "b", "a"]
              }
            },
            "required": ["color"]
          },
          "iconStyle": {
            "type": "object",
            "properties": {
              "url": {
                "type": "uri"
              },
              "size": {
                "type": "integer",
                "default": 32
              }
            },
            "required": ["url"]
          }
        }
      }
    }
  }
};
