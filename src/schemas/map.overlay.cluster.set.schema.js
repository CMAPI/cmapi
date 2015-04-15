cmapi.channel["map.overlay.cluster.set"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.cluster.set",
    "properties": {
      "threshold": {
        "type": "integer",
        "minimum": 2,
        "default": 2
      },
      "distance": {
        "type": "integer",
        "minimum": 1,
        "default": 50
      },
      "clusterStyle": {
        "type": "object",
        "properties": {
          "label": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "summary": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "pointStyle": {
            "type": "object",
            "properties": {
              "color": {
                "type": "object",
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
              },
              "radius": {
                "type": ["integer", "string"],
                "default": 6
              }
            },
            "required": []
          },
          "iconStyle": {
            "decription": "",
            "type": "object",
            "properties": {
              "url": {
                "type": "string"
              }
            },
            "required": ["url"]
          }
        }
      },
      "overlayId": {
        "type": "string"
      }
    },
    "required": []
  }
};
