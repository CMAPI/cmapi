cmapi.channel["map.drag-drop"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Framework dependent",
    "type": "object",
    "properties": {
      "dragDropData": {
        "type": "object",
        "required": ["featureId"],
        "properties": {
          "overlayId": {
            "type": "string"
          },
          "featureId": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "zoom": {
            "type": "boolean",
            "default": false
          },
          "marker": {
            "type": "object",
            "properties": {
              "details": {
                "type": "string"
              },
              "iconUrl": {
                "type": "string",
                "default": "map default icon"
              }
            }
          },
          "feature": {
            "type": "object",
            "properties": {
              "format": {
                "type": "string",
                "default": "kml"
              },
              "featureData": {
                "type": "object"
              }
            },
            "required": ["featureData"]
          },
          "featureUrl": {
            "type": "object",
            "properties": {
              "format": {
                "type": "string",
                "default": "kml"
              },
              "url": {
                "type": "string"
              },
              "params": {
                "type": "object"
              }
            },
            "required": ["url"]
          }
        }
      }
    },
    "required": ["dragDropData"]
  }
};
