cmapi.channel["map.feature.show"].description = {
  "description": "Have the map show previously hidden feature data.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay where the feature to be shown is found. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    },
    "featureId": {
      "description": "The ID of the feature to be shown.",
      "defaultValue": ""
    },
    "zoom": {
      "description": "true if map should zoom to the shown feature, false if not. Default is false.",
      "defaultValue": false
    }
  }
};
