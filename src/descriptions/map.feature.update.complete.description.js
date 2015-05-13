cmapi.channel["map.feature.update.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.update.",
  "properties": {
        "overlayId": {
          "description": "The ID of the overlay this feature was in when the map.feature.update message was originally sent"
        },
        "featureId": {
          "description": "Unique identifier for the feature that was updated."
        },
        "name": {
          "description": "Name of the feature that was updated.  If the map.feature.update message updated the feature name, then this element MUST be populated with the updated name.  If the feature does not have a name, then this field will be populated with an empty string"
        },
        "newOverlayId": {
          "description": "The ID of the overlay this feature was in when the map.feature.update message was executed. If the feature was re-named and not moved,  then this MUST be the same value as the 'overlayId' above"
        }
  }
};
