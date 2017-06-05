cmapi.channel["map.feature.draw"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.draw",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string"
      },
      "featureId": {
        "type": "string"
      },
      "messageId": {
        "type": "string"
      },
      "type": {
        "type": "string",
        "default": "line"
      },
      "name": {
        "type": "string"
      },
      "properties": {
        "type": "object"
      }
    },
    "required": ["featureId", "messageId", "type"]
  }
};
