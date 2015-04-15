cmapi.channel["map.feature.edit"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.edit",
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
      }
    },
    "required": ["featureId", "messageId"]
  }
};
