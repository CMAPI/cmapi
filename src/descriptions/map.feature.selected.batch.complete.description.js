cmapi.channel["map.feature.selected.batch.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.selected.batch.",
  "properties": {
    "features": {
      "description": "An array of feature ID's.",
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
