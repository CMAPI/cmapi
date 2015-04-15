cmapi.channel["map.menu.create"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.create",
    "properties": {
      "name": {
        "type": "string",
        "default": "value passed in menuId param"
      },
      "menuId": {
        "type": "string"
      },
      "menuType": {
        "enum": ["mapglobal", "overlayglobal", "featureglobal", "objectinstance", "submenu"]
      },
      "menuItems": {
        "type": "array",
        "properties": {
          "menuItemId": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "iconUrl": {
            "type": "string"
          }
        },
        "required": ["menuItemId", "label"]
      },
      "messageId": {
        "type": "string"
      }
    },
    "required": ["menuId", "menuItems"]
  }
};
