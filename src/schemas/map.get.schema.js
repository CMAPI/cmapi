cmapi.channel["map.get"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.get",
    "properties": {
      "recursive": {
        "type": "boolean",
        "default": false
      },
      "types": {
        "type": ["array", "string"],
        "enum": ["overlay", "feature"]
      },
      "filter": {
        "type": "array",
        "properties": {
          "property": {
            "type": "string"
          },
          "term": {
            "type": ["string", "number", "boolean"]
          }
        },
        "additionalItems": true
      },
      "messageId": {
        "type": "string"
      }
    },
    "required": ["types", "messageId"]
  }
};
