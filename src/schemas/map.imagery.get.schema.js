cmapi.channel["map.imagery.get"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.imagery.get",
    "type": "object",
    "properties": {
      "imageryId": {
        "type": "string"
      },
      "messageId": {
        "type": "string"
      }
    },
    "required": ["messagId"]
  }
};
