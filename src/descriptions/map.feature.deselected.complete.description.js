cmapi.channel["map.feature.deselected.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.deselected.",
  "properties": {
    "features": {
      "description": "An array of feature identifier objects.",
      "default": "",
      "properties": {
        "overlayId": {
          "description": "The ID of the overlay this feature was loaded into.",
          "default": ""
        },
        "featureId": {
          "description": "Unique identifier for the given feature.",
          "default": ""
        }
      }
    }
  }
};
