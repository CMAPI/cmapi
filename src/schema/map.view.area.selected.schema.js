cmapi.channel["map.view.area.selected"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.area.selected",
    "description": "Send a message indicating the user has drag selected a rectangular area (bbox) on the map.  This can be used to notify widgets that the user is interested in this particular area of the current view.",
    "type": "object",
    "properties": {
      "bounds": {
        "description": "Bounding box of area selected on map",
        "type": "object",
        "default": " ",
        "properties": {
          "southWest": {
            "description": "Bottom right of the bounds",
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "description": "The latitude value of the point",
                "minimum": "-90",
                "maximum": "90"
              },
              "lon": {
                "type": "number",
                "description": "The longitude value of the point",
                "minimum": "-180",
                "maximum": "180"
              }
            },
            "required": ["lat", "lon"]
          },
          "northEast": {
            "description": "Top left of the bounds",
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "description": "The latitude value of the point",
                "minimum": "-90",
                "maximum": "90"
              },
              "lon": {
                "type": "number",
                "description": "The longitude value of the point",
                "minimum": "-180",
                "maximum": "180"
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["southWest", "northEast"]
      },
      "button": {
        "description": "Which mouse button was clicked.  Allowable values are 'right', 'left', and 'middle'.  Default value is 'left'.",
        "type": ["string", "enum"],
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "keys": {
        "description": "An array of keys pressed during the click event.  Allowable values are 'alt', 'ctrl', 'shift', and 'none'. Default value is 'none'.",
        "type": ["array", "enum"],
        "uniqueItems": true,
        "default": ["none"],
        "items": {
          "anyOf": ["shift", "alt", "ctrl", "none"]
        }
      }
    },
    "required": ["bounds", "keys", "button"]
  },
  "notes": ["For example: the user presses mouse down, drags a rectangular area on the map, and then releases the mouse button - the map then emits a map.view.area.selected message",
    "It is up to the map implementation to define the user interface controls and workflow to allow the user to identify the area to select",
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]
};
