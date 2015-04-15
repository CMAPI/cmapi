cmapi.channel["map.menu.clicked"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.clicked",
    "properties": {
      "menuId": {
        "type": "string"
      },
      "menuItemId": {
        "type": "string"
      },
      "overlayId": {
        "type": "string"
      },
      "featureId": {
        "type": "string"
      },
      "lat": {
        "type": "number",
        "minimum": -90,
        "maximum": 90
      },
      "lon": {
        "type": "number",
        "minimum": -180,
        "maximum": 180
      },
      "x": {
        "type": "number",
        "minimum": 0
      },
      "y": {
        "type": "number",
        "minimum": 0
      },
      "elevation": {
        "type": "number"
      }
    },
    "required": ["menuId", "menuItemId"]
  }
};
