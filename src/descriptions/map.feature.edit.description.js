cmapi.channel["map.feature.edit"].description = {
  "description": "Message to notify the map to begin editing an existing feature. The map is responsible for providing the user interface to enable visual editing of the feature.",
  "properties": {
    "overlayId": {
      "description": "The id of the overlay containing the feature that is to be edited.  If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay with this ID does not exist, an error is sent on the map.error channel",
      "defaultValue": "Sending widget's ID"
    },
    "featureId": {
      "description": "The unique identifier for the feature to be edited. ",
      "defaultValue": ""
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message and which MUST be used in the associated map.message.complete, map.message.progress, and map.message.cancel messages as defined in the map.message channels.",
      "defaultValue": ""
    }
  }
};
