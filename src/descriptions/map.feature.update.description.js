cmapi.channel["map.feature.update"].description = {
  "description": "Update an existing feature on the map.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay where the feature to be updated is currently found. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed.",
      "default": "sending widget's ID"
    },
    "featureId": {
      "description": "The ID of the feature to be updated",
      "default": "N/A"
    },
    "name": {
      "description": "If the name provided differs from the feature's current name, the display value will be changed to show the new value.  If no value is provided, the feature name will remain unchanged.",
      "default": "N/A"
    },
    "newOverlayId": {
      "description": "This represents the ID of an overlay to move the feature to.  If this attribute is provided, the feature MUST be removed from its current overlay and added to the overlay with this ID.  If an overlay with an ID of newOverlayId does not exist, a new overlay will be created with an ID of newOverlayId, and the feature to be updated will be moved to the overlay identified by newOverlayId.",
      "default": "N/A"
    }
  }
};
