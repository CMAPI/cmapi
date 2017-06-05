cmapi.channel["map.feature.draw"].description = {
  "description": "Message to initiate a draw from a widget.  Allows user to draw a point, line or polygon by telling the map to start the user interaction for drawing.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay the feature to be drawn should be loaded into. If an overlay with this ID already exists, the new feature will merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The unique identifier for the feature to be drawn. ",
      "defaultValue": ""
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message and which MUST be used in the associated map.message.complete, map.message.progress, and map.message.cancel messages as defined in the map.message channels.",
      "defaultValue": ""
    },
    "type": {
      "description": "Type of feature to be drawn.  Supported types include 'line', 'polygon', 'point' or 'symbol'.  Optional types include 'bufferedline', 'circle', 'aoi', and 'airspace'.  Additional types may be added in the future.",
      "defaultValue": "line"
    },
    "name": {
      "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
      "defaultValue": ""
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    }
  }
};
