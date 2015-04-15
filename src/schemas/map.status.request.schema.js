cmapi.channel["map.status.request"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.request",
    "type": "object",
    "properties": {
      "types": {
        "type": "array",
        "items": {
          "enum": ["view", "format", "selected", "about", "initialization"]
        }
      }
    },
    "required": []
  }
};
