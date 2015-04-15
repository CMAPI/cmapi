cmapi.channel["map.view.mouseup"].description = {
  "description": "Report that a mouse up event was triggered from the map",
  "properties": {
    "lat": {
      "description": "The latitude of the location that was clicked",
      "default": ""
    },
    "lon": {
      "description": "The longitude of the location that was clicked",
      "default": ""
    },
    "button": {
      "description": "Which mouse button was clicked.  Allowable values are right, left, and middle.  For backwards compatibility, if this attribute is not populated it MUST be treated as a left mouse click the same as if it were populated with left.",
      "default": "left"
    },
    "type": {
      "description": "The type of click event. Allowable values are single and double.  For backwards compatibility, if this attribute is not populated it MUST be assumed to be a single mouse click and treated the same as if it were populated with single.",
      "default": "single"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.  Allowable values are alt, ctrl, shift, and none. For backwards compatibility, if this attribute is not populated it MUST be assumed that no additional keys were pressed and behave the same way as if it were populated with none.",
      "default": ["none"]
    }
  }
};
