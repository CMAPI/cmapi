cmapi.channel["map.message.progress"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.message.progress",
    "type": "object",
    "properties": {
      "messageId": {
        "type": "string"
      },
      "originatingChannel": {
        "type": "string"
      },
      "details": {
        "type": "object"
      }
    },
    "required": ["messageId", "details"]
  }
};
