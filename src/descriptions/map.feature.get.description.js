cmapi.channel["map.feature.get"].description = {
  "description": "Request the full feature data, what is provided in the map.feature.plot payload, for one or more features on a given overlay.  To get a simple list of featureIds and names on an overlay use the map.feature.query channel",
  "properties": {
    "features": {
      "description": "An array of objects with a featureId and an overlayId representing the feature to be retrived",
      "default": "",
      "properties": {
        "overlayId": {
          "description": "The overlayId that currently contains the feature.",
          "default": ""
        },
        "featureId": {
          "description": "The id of the feature you wish to retrieve.",
          "default": ""
        }
      }
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
      "default": ""
    }
  }
};
