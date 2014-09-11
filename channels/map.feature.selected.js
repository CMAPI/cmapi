cmapi.channel["map.feature.selected"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.selected",
    "description": "Select, or report that object was selected.",
    "properties": {
      "selectedId": {
        "description": "The ID of the object to be selected (may be a sub-feature contained within the aggregate feature data with the given featureId).",
        "type": "string",
        "default": "N/A"
      },
      "selectedName": {
        "description": "The name of the selected object.",
        "type": "string",
        "default": "N/A"
      },
      "featureId": {
        "description": "The ID of the feature that contains the selected object.",
        "type": "string",
        "default": "N/A"
      },
      "overlayId": {
        "description": "The ID of the overlay which contains the selected object. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message batch.  If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of the message batch.",
        "type": "string",
        "status": "new",
        "extension": "User Manipulation - Message Complete"
      }
    },
    "required": ["featureId"]
  },
  "notes": [
    "Although both selectedId and selectedName are optional, one MUST be passed in if a sub-feature is to be identified. Generally, selectedId is preferred and selectedName is used when no selectedId is available.",
    "The expected behavior resulting from this message is that this feature will be added to the list of currently selected features (see map.status.selected below).  If the identified feature is currently selected when the message is received, then the map widget SHOULD ignore this message (i.e., this message is idempotent)."
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added optional messageId parameter to support user manipulation extension"
  }, {
    "version": "1.3.0",
    "change": "This channel is new"
  }]
};
