cmapi.channel["map.menu.remove"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.remove",
    "properties": {
      "menuId": {
        "type": "string"
      },
      "messageId": {
        "type": "string"
      }
    },
    "required": ["menuId"]
  }
};
