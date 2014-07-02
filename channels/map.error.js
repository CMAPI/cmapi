cmapi.channel["map.error"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.error",
    "description": "Map Widget reports errors occurred when attempting to process any message.",
    "type": "object",
    "properties": {
      "sender": {
        "type": "string",
		"default": "N/A",
        "description": "Sender ID of message that caused error."
      },
      "type": {
        "type": "string",
		"default": "N/A",
        "description": "Type of message that caused error."
      },
      "msg": {
        "type": "object",
		"default": "N/A",
        "description": "The message that caused error."
      },
      "error": {
        "type": "string",
		"default": "N/A",
        "description": "A description of the error."
      }
    },
    "required": ["sender", "type", "msg", "error"]
  },
  "notes": []
};