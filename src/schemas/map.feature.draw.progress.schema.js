cmapi.channel["map.feature.draw.progress"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.progress Details object",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string"
      },
      "featureId": {
        "type": "string"
      },
      "type": {
        "type": "string"
      },
      "properties": {
        "type": "object"
      },
      "feature": {
        "type": "object"
      },
      "format": {
        "type": "string"
      },
      "updates": {
        "type": "object",
        "properties": {
          "type": {
            "enum": ["add", "update", "remove"]
          },
          "indices": {
            "type": "array",
            "items": {
              "type": "integer"
            },
            "additionalItems": true
          },
          "coordinates": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "lat": {
                  "type": "number",
                  "maximum": 90,
                  "minimum": -90,
                  "description": "The latitude component of the coordinate."
                },
                "lon": {
                  "type": "number",
                  "maximum": 180,
                  "minimum": -180,
                  "description": "The longitude component of the coordinate."
                },
                "alt": {
                  "type": "number",
                  "description": "The optional altitude component of the coordinate."
                }
              }
            },
            "additionalItems": true
          }
        }
      }
    },
    "required": ["featureId", "overlayId", "type", "feature", "format", "updates"]
  }
};
