cmapi.channel["map.overlay.features.get"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.features.get",
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
