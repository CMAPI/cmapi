cmapi.channel["map.feature.mousedown"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.mousedown",
    "description": "Report that a mouse down event was triggered from a particular feature",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay this feature is loaded into.",
        "type": "string"
      },
      "featureId": {
        "description": "Unique identifier for the given feature clicked.",
        "type": "string"
      },
      "lat": {
        "type": "number",
        "description": "The latitude of the location that was clicked",
        "minimum": "-90",
        "maximum": "90"
      },
      "lon": {
        "type": "number",
        "description": "The longitude of the location that was clicked",
        "minimum": "-180",
        "maximum": "180"
      },
      "button": {
        "description": "Which mouse button was clicked.",
        "type" : "string",
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "description": "The type of click event.",
        "type" : "string",
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "description": "An array of keys pressed during the click event. ",
        "uniqueItems": true,
        "type" : "string",
        "default": "none",
        "enum": ["shift", "alt", "ctrl", "none"]
      }
    },
    "required": ["lat", "lon", "button", "keys", "type", "featureId", "overlayId"]
  }
};
