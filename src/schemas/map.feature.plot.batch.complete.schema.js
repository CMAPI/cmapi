cmapi.channel["map.feature.plot.batch.complete"] = {
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
            "type": "string"
          },
          "feature": {
            "type": ["object", "string"],
            "additionalProperties": true
          },
          "readOnly": {
            "type": "boolean"
          },
          "properties": {
            "additionalProperties": true,
            "type": "object"
          }
        },
        "required": ["featureId", "overlayId","name","format","feature","readOnly","properties"]
      }
    },
    "required": ["features"]
  }
};
