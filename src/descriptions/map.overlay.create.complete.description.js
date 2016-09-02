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
    }
  }
};
