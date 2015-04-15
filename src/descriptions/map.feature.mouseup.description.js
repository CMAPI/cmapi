cmapi.channel["map.feature.mouseup"].description = {
  "description": "Report that a mouse up event was triggered from a particular feature",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay this feature is loaded into.",
      "default": ""
    },
    "featureId": {
      "description": "Unique identifier for the given feature clicked.",
      "default": ""
    },
    "lat": {
      "description": "The latitude of the location that was clicked",
      "default": ""
    },
    "lon": {
      "description": "The longitude of the location that was clicked",
      "default": ""
    },
    "button": {
      "description": "Which mouse button was clicked. ",
      "default": "left"
    },
    "type": {
      "description": "The type of click event. ",
      "default": "single"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.",
      "default": "none"
    }
  }
};
