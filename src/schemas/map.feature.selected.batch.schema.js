cmapi.channel["map.feature.selected.batch"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.selected.batch",
    "type": "object",
    "properties": {
      "features": {
        "type": "Array"
      },
      "overlayId": {
        "type": "string"
      },
      "messageId": {
        "type": "string",
        "extension": "User Manipulation - Message Complete"
      }
    },
    "required": ["features"]
  }
};
