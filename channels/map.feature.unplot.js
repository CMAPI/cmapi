cmapi.channel["map.feature.unplot"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.unplot",
    "description": "Removes feature data from the map.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the feature to be removed is found. If no overlayId is included, default overlay with an ID equal to sending widget's ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "featureId": {
        "description": "The ID of the feature to be removed.",
        "type": "string",
        "default": "N/A"
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message batch.  If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of the message batch.",
        "type": "string",
        "status": "new"
      }
    },
    "required": ["featureId"]
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added optional messageId parameter to support user manipulation extension"
  }]
};
