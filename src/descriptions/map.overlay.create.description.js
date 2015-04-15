cmapi.channel["map.overlay.create"].description = {
  "description": "Create an overlay into which data can be aggregated.",
  "properties": {
    "name": {
      "description": "The name of the overlay. If not included, the ID is used as the name. Note that overlay names do not have to be unique and are intended for display purposes only."
    },
    "overlayId": {
      "description": "The unique ID of the new overlay. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. If an overlay with the given ID already exists, this message will have no effect. Note that overlay IDs must be unique even across multiple parent overlays."
    },
    "parentId": {
      "description": "The ID of the parent overlay in which to create this overlay. If an overlay with an ID of parentId does not exist, a new overlay will be created with an ID of parentId, and the parentage of the overlay identified by overlayId will be set to the newly created parent overlay."
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message.  This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message."
    }
  }
};
