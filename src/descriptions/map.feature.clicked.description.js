cmapi.channel["map.feature.clicked"].description = {
  "description": "'Click', or report that a particular feature was clicked",
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
      "description": "Which mouse button was clicked.  Allowable values are 'right', 'left', and 'middle'.  Default value is 'left'.",
      "default": "left"
    },
    "type": {
      "description": "The type of click event. Allowable values are 'single' and 'double'.  Default value is 'single'.",
      "default": "single"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.  Allowable values are 'alt', 'ctrl', 'shift', and 'none'.  Default value is 'none'.",
      "default": ["none"]
    }
  }
};
