cmapi.channel["map.feature.get"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.get",
    "properties": {
      "features": {
        "type": "array",
        "properties": {
          "overlayId": {
            "type": "string"
          },
          "featureId": {
            "type": "string"
          }
        },
        "additionalItems": true,
        "required": ["features, messagId"]
      },
      "messageId": {
        "type": "string"
      }
    },
    "required": ["features, messagId"]
  }
};
