cmapi.channel["map.feature.unplot"].description = {
  "description": "Removes feature data from the map.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay where the feature to be removed is found. If no overlayId is included, default overlay with an ID equal to sending widget's ID is assumed.",
      "default": "sending widget's ID"
    },
    "featureId": {
      "description": "The ID of the feature to be removed.",
      "default": "N/A"
    }
  }
};
