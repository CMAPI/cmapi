cmapi.channel["map.status.about"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.about",
    "type": "object",
    "properties": {
      "version": {
        "type": "string"
      },
      "type": {
		"type":"string",
        "enum": ["2-D", "3-D", "other"]
      },
      "widgetName": {
        "type": "string"
      },
      "instanceName": {
        "type": "string"
      },
      "universalName": {
        "type": "string"
      },
      "extensions": {
        "type": "array",
        "default" : [],
        "uniqueItems": true,
        "items": {
          "anyOf": ["intents", "clustering", "userManipulation", "selected", null]
        }
      }
    },
    "required": ["version", "type", "widgetName", "extensions"]
  }
};
