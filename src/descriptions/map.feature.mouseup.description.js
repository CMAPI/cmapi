cmapi.channel["map.feature.mouseup"].description = {
  "description": "Report that a mouse up event was triggered from a particular feature",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay this feature is loaded into.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "Unique identifier for the given feature clicked.",
      "defaultValue": ""
    },
    "lat": {
      "description": "The latitude of the location that was clicked",
      "defaultValue": ""
    },
    "lon": {
      "description": "The longitude of the location that was clicked",
      "defaultValue": ""
    },
    "button": {
      "description": "Which mouse button was clicked. ",
      "defaultValue": "left"
    },
    "type": {
      "description": "The type of click event. ",
      "defaultValue": "single"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.",
      "defaultValue": "none"
    }
  }
};
