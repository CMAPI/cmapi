cmapi.channel["map.feature.clicked"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.clicked",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string"
      },
      "featureId": {
        "type": "string"
      },
      "lat": {
        "type": "number",
        "minimum": "-90",
        "maximum": "90"
      },
      "lon": {
        "type": "number",
        "minimum": "-180",
        "maximum": "180"
      },
      "button": {
        "type": ["string", "enum"],
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "type": ["string", "enum"],
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "type": "array",
        "uniqueItems": true,
        "default": ["none"],
        "items": {
          "enum": ["shift", "alt", "ctrl", "none"]
        }
      }
    },
    "required": ["lat", "lon", "button", "keys", "type", "featureId", "overlayId"]
  }
};
