cmapi.channel["map.view.center.feature"].description = {
  "description": "Center the map on a particular feature. The map may also be zoomed to show the entire feature (if possible) or to show a given range.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay overlay where the feature to be centered on is found. If no overlayId is included, default overlay with ID equal to sending widget ID is assumed.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The ID of the feature to center on",
      "defaultValue": ""
    },
    "zoom": {
      "description": "Attribute that defines the zoom behaviour of the map. If auto, map will adjust to best fit the feature in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
      "defaultValue": ""
    }
  }
};
