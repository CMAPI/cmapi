cmapi.channel["map.overlay.create.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.overlay.create.",
  "properties": {
    "name": {
      "description": "The name of the overlay.",
      "defaultValue": "N/A"
    },
    "overlayId": {
      "description": "The unique ID of the new overlay.",
      "defaultValue": "sending widget's ID"
    },
    "parentId": {
      "description": "The ID of the parent overlay in which the overlay was created.",
      "defaultValue": "N/A"
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message.  This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message.",
      "defaultValue": ""
    },
    "menuId": {
      "description": "The id of a context menu.  If populated, the context menu MUST have already been pre-registered via the map.menu.create channel.  If populated, the context menu associated with this id will appear when the feature is 'right-clicked', allowing the user to invoke actions on the feature which will be handled by the widget which originally registered the context menu.  If no menuId is assigned, the feature will not have a context menu associated when right-clicked.",
      "defaultValue": ""
    }
  }
};
