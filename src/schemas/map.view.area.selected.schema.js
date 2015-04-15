cmapi.channel["map.view.area.selected"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.area.selected",
    "type": "object",
    "properties": {
      "bounds": {
        "type": "object",
        "default": " ",
        "properties": {
          "southWest": {
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "minimum": -90,
                "maximum": 90
              },
              "lon": {
                "type": "number",
                "minimum": -180,
                "maximum": 180
              }
            },
            "required": ["lat", "lon"]
          },
          "northEast": {
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "minimum": -90,
                "maximum": 90
              },
              "lon": {
                "type": "number",
                "minimum": -180,
                "maximum": 180
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["southWest", "northEast"]
      },
      "button": {
        "type": ["string", "enum"],
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "keys": {
        "type": ["array", "enum"],
        "uniqueItems": true,
        "default": ["none"],
        "items": {
          "anyOf": ["shift", "alt", "ctrl", "none"]
        }
      }
    },
    "required": ["bounds", "keys", "button"]
  }
};
