cmapi.channel["map.overlay.remove"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.remove",
    "description": "Remove entire overlay from the map.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay to be removed. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed. ",
        "type": "string",
        "default": "sending widget's ID"
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string",
        "status": "new"
      },
    },
    "required": []
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added optional messageId parameter to support user manipulation extension"
  }]
};
