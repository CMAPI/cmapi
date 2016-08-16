cmapi.channel["map.overlay.update"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.update",
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
        "additionalProperties": true,
        "type": "object"
      }
    },
    "required": []
  }
};
