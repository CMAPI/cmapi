cmapi.channel["map.overlay.get"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.get",
    "properties": {
      "overlays": {
        "type": "array",
        "properties": {
          "overlayId": {
            "type": "string"
          }
        },
        "additionalItems": true,
        "required": ["overlays, messagId"]
      },
      "messageId": {
        "type": "string"
      }
    },
    "required": ["features, messagId"]
  }
};
