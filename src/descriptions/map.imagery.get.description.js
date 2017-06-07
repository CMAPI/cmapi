cmapi.channel["map.imagery.get"].description = {
  "description": "Request the full set of data, what is provided in the map.feature.plot payload, for one or more features on a given overlay.  To get a simple list of featureIds and names on an overlay use the map.feature.query channel",
  "properties": {
    "imageryId": {
      "description": "The unique id of the imagery. If imagery id does not exists map send all imageries."
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
      "defaultValue": ""
    }
  }
};
