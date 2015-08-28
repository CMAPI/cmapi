cmapi.channel["map.view.center.overlay.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.overlay.complete",
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
