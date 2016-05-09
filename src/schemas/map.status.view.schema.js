cmapi.channel["map.status.view"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.view",
    "type": "object",
    "properties": {
      "bounds": {
        "type": "object",
        "properties": {
          "southWest": {
            "type": "object",
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
              }
            },
            "required": ["lat", "lon"]
          },
          "northEast": {
            "type": "object",
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
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["southWest", "northEast"]
      },
      "center": {
        "type": "object",
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
          }
        },
        "required": ["lat", "lon"]
      },
      "range": {
        "type": "number"
      },
      "requester": {
        "type": "string",
        "status": "updated"
      },
      "time": {
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
          "timeSpans": {
            "type": "Array",
            "items": {
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
          "timeStamp": {
            "type": "string",
            "format": "date-time"
          }
        }
      }
    },
    "required": ["bounds", "center", "range"]
  }
};
