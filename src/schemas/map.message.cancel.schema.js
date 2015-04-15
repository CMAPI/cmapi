cmapi.channel["map.message.cancel"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.message.cancel",
    "type": "object",
    "properties": {
      "messageId": {
        "type": "string"
      }
    },
    "required": ["messageId"]
  }
};
