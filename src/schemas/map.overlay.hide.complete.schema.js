cmapi.channel["map.overlay.hide.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.overlay.hide.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The unique ID of the hidden overlay.",
        "type": "string"
      }
    },
    "required": ["overlayId"]
  }
};
