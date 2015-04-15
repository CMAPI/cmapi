cmapi.channel["map.feature.plot.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "type": "object",
    "properties": {
      "features": {
        "type": "array",
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
          "format": {
            "type": "string",
            "default": "kml"
          },
          "feature": {
            "type": ["object", "string"],
            "additionalProperties": true
          },
          "readOnly": {
            "type": "boolean",
            "default": true
          },
          "properties": {
            "additionalProperties": true,
            "type": "object"
          }
        },
        "required": ["featureId", "overlayId"]
      }
    },
    "required": ["features"]
  }
};
