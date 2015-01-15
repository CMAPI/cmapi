cmapi.channel["map.feature.mouseup"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.mouseup",
    "description": "Report that a mouse up event was triggered from a particular feature",
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
        "default": "N/A",
        "minimum": "-90",
        "maximum": "90"
      },
      "lon": {
        "type": "number",
        "description": "The longitude of the location that was clicked",
        "default": "N/A",
        "minimum": "-180",
        "maximum": "180"
      },
      "button": {
        "description": "Which mouse button was clicked.  Allowable values are 'right', 'left', and 'middle'.  Default value is 'left'.",
        "type": ["string", "enum"],
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "description": "The type of click event. Allowable values are 'single' and 'double'.  Default value is 'single'.",
        "type": ["string", "enum"],
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "description": "An array of keys pressed during the click event.  Allowable values are 'alt', 'ctrl', 'shift', and 'none'.  Default value is 'none'.",
        "type": ["sring", "enum"],
        "uniqueItems": true,
        "default": ["none"],
        "items": {
          "enum": ["shift", "alt", "ctrl", "none"]
        }
      }
    },
    "required": ["lat", "lon", "button", "keys", "type", "featureId", "overlayId"]
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]
};
