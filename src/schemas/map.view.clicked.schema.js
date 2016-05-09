cmapi.channel["map.view.clicked"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.clicked",
    "type": "object",
    "definitions": {
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
      }
    },
    "properties": {
      "lat": {
        "type": "number",
        "minimum": -90,
        "maximum": 90
      },
      "lon": {
        "type": "number",
        "minimum": -180,
        "maximum": 180
      },
      "button": {
        "type": "string",
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "type": "string",
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "type": "array",
        "uniqueItems": true,
        "default": ["none"],
        "items": {
          "enum": ["shift", "alt", "ctrl", "none"]
        }
      },
      "time": {
        "type": "object",
        "properties": {
          "timeSpan": {
            "$ref": "#/definitions/timeSpan"
          },
          "timeSpans": {
            "type": "Array",
            "items": {
              "$ref": "#/definitions/timeSpan"
            }
          },
          "timeStamp": {
            "type": "string",
            "format": "date-time"
          }
        }
      }
    },
    "required": ["lat", "lon", "button", "keys", "type"]
  }
};
