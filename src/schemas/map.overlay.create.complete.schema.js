cmapi.channel["map.overlay.create.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.overlay.create map.message.complete Details object",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "overlayId": {
        "type": "string"
      },
      "parentId": {
        "type": "string"
      },
      "properties": {
        "type": "object"
      }
    },
    "required": ["overlayId"]
  }
};
