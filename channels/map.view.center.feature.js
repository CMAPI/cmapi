cmapi.channel["map.view.center.feature"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.feature",
    "description": "Center the map on a particular feature. The map may also be zoomed to show the entire feature (if possible) or to show a given range.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay overlay where the feature to be centered on is found. If no overlayId is included, default overlay with ID equal to sending widget ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "featureId": {
        "description": "The ID of the feature to center on",
        "type": "string",
        "default": "N/A"
      },
      "zoom": {
        "description": "Attribute that defines the zoom behaviour of the map. If auto, map will adjust to best fit the feature in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
        "type": ["string", "number"],
        "default": "N/A"
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string",
        "status": "new",
        "extension": "User Manipulation - Message Complete"
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
