cmapi.channel["map.feature.edit.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string"
      },
      "featureId": {
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
      "coordinates": {
        "type": "array"
      }
    },
    "required": ["featureId", "overlayId"]
  }
};
