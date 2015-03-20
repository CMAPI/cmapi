cmapi.channel["map.error"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.error",
    "description": "Map Widget reports errors occurred when attempting to process any message.",
    "type": "object",
    "properties": {
      "sender": {
        "type": "string",
        "description": "Sender ID of message that caused error."
      },
      "type": {
        "type": "string",
        "description": "Type of message that caused error."
      },
      "msg": {
        "type": "object",
        "description": "The message that caused error."
      },
      "error": {
        "type": "string",
        "description": "A description of the error."
      }
    },
    "required": ["sender", "type", "msg", "error"]
  }
};