cmapi.channel["map.get.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
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
