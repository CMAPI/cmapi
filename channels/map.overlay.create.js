cmapi.channel["map.overlay.create"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.create",
    "description": "Create an overlay into which data can be aggregated.",
    "properties": {
      "name": {
        "description": "The name of the overlay. If not included, the ID is used as the name. Note that overlay names do not have to be unique and are intended for display purposes only.",
        "type": "string",
        "default": "N/A"
      },
      "overlayId": {
        "description": "The unique ID of the new overlay. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. If an overlay with the given ID already exists, this message will have no effect. Note that overlay IDs must be unique even across multiple parent overlays.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "parentId": {
        "description": "The ID of the parent overlay in which to create this overlay. If an overlay with an ID of parentId does not exist, a new overlay will be created with an ID of parentId, and the parentage of the overlay identified by overlayId will be set to the newly created parent overlay.",
        "type": "string",
        "default": "N/A"
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string",
        "status": "new"
      },
      "properties": {
        "description": "A free form object that can contain any additional properties the widget wants sent with this item.  Any unsupported properties on this channel should be stored in the properties object to avoid polluting the root payload of the message.  A set of optional standardized values within the properties object MAY be added in future versions.",
        "type": "object",
        "status": "new"
      }
    },
    "required": []
  },
  "notes": [],
  "changeLog": [{"version": "1.3.0", "change" : "Added optional messageId parameter to support user manipulation extension"}]
}
