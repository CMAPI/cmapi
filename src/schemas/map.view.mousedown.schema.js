cmapi.channel["map.view.mousedown"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.mousedown",
    "description": "Report that a mouse down event was triggered from the map",
    "type": "object",
    "properties": {
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
        "description": "Which mouse button was clicked.  Allowable values are right, left, and middle.  For backwards compatibility, if this attribute is not populated it MUST be treated as a left mouse click the same as if it were populated with left.",
        "type": "string",
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "description": "The type of click event. Allowable values are single and double.  For backwards compatibility, if this attribute is not populated it MUST be assumed to be a single mouse click and treated the same as if it were populated with single.",
        "type": "string",
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "description": "An array of keys pressed during the click event.  Allowable values are alt, ctrl, shift, and none. For backwards compatibility, if this attribute is not populated it MUST be assumed that no additional keys were pressed and behave the same way as if it were populated with none.",
        "type": "array",
        "uniqueItems": true,
        "default": ["none"],
        "items": {
            "enum": ["shift", "alt", "ctrl", "none"]
        }
      }
    },
    "required": ["lat", "lon", "button", "keys", "type"]
  }
};