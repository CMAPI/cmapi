cmapi.channel["map.get.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.message.complete",
    "type": "object",
    "properties": {
      "messageId": {
        "type": "string"
      },
      "details": {
        "type": "object"
      }
    },
    "required": ["messageId", "details"]
  }
};
