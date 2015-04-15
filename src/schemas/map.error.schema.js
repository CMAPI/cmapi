cmapi.channel["map.error"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.error",
    "type": "object",
    "properties": {
      "sender": {
        "type": "string"
      },
      "type": {
        "type": "string"
      },
      "msg": {
        "type": "object"
      },
      "error": {
        "type": "string"
      }
    },
    "required": ["sender", "type", "msg", "error"]
  }
};
