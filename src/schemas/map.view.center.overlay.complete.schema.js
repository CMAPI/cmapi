cmapi.channel["map.view.center.overlay.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string"
      },
      "zoom": {
        "type": "string"
      }
    },
    "required": ["overlayId", "zoom"]
  }
};
