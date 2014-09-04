cmapi.channel["map.feature.update"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.update",
    "description": "Update an existing feature on the map.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the feature to be updated is currently found. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "featureId": {
        "description": "The ID of the feature to be updated",
        "type": "string",
        "default": "N/A"
      },
      "name": {
        "description": "If the name provided differs from the feature's current name, the display value will be changed to show the new value.  If no value is provided, the feature name will remain unchanged.",
        "type": "string",
        "default": "N/A"
      },
      "newOverlayId": {
        "description": "This represents the ID of an overlay to move the feature to.  If this attribute is provided, the feature MUST be removed from its current overlay and added to the overlay with this ID.  If an overlay with an ID of newOverlayId does not exist, a new overlay will be created with an ID of newOverlayId, and the feature to be updated will be moved to the overlay identified by newOverlayId.",
        "type": "string",
        "default": "N/A"
      },
      "properties": {
        "description": "A free form object that can contain any additional properties the widget wants sent with this item.  Any unsupported properties on this channel should be stored in the properties object to avoid polluting the root payload of the message.  A set of optional standardized values within the properties object MAY be added in future versions.",
        "type": "object",
        "status": "new"
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string",
        "status": "new",
        "extension" : "User Manipulation - Message Complete"
      },
      "menuId": {
        "description": "The id of a context menu that was registered in map.menu.create.  If populated, when the feature is right-clicked the context menu associated with this id will appear allowing the user to perform custom actions on the feature handled by the widget which registered the context menu.  If no menuId is assigned, the feature will not have a context menu associated when right-clicked.",
        "type": "string",
        "status": "new",
        "extension" : "User Manipulation - Context Menus"
      }
    },
    "required": ["featureId"]
  },
  "notes": ["For updates to a feature's geometry or other properties no covered in the update channel, a map.feature.plot with the same overlayId and feature Id should be used to replace an existing feature."],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added optional messageId parameter to support user manipulation extension"
  }, {
    "version": "1.3.0",
    "change": "Added optional properties object"
  }, {
    "version": "1.3.0",
    "change": "Added optional menuId parameter"
  }]
};
