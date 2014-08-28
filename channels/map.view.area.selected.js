cmapi.channel["map.view.area.selected"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.area.selected",
    "description": "Send a message indicating the user has drag selected a rectangular area (bbox) on the map.  This can be used to notify widgets that the user is interested in this particular ae of the current view.",
    "type": "object",
    "properties": {
      "bounds": {
        "description": "Bounding box of area selected on map by dragging over a rectangular.",
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
        "description": "Which mouse button was clicked.  Allowable values are “right,” “left,” and “middle.”  For backwards compatibility, if this attribute is not populated it MUST be treated as a left mouse click the same as if it were populated with “left.”",
        "type": ["string", "enum"],
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "keys": {
        "description": "An array of keys pressed during the click event.  Allowable values are “alt,” “ctrl,” “shift,” and “none.” For backwards compatibility, if this attribute is not populated it MUST be assumed that no additional keys were pressed and behave the same way as if it were populated with “none.”",
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
  "notes": ["User presses mouse down, and drags a rectangular area on the map.",
    "Map emits a map.view.area.selected message",
    "It is up to a map implemetation to define the user interface controls / workflow to allow the user to perform the rectangular area drag select",
    "The user SHOULD see a temporary rectangle displayed on the map while dragging",
    "The temporary rectangle SHALL dissapear once the user releases the mouse button and the mousse up occurs"
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]
};
