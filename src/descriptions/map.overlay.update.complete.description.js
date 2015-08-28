cmapi.channel["map.overlay.update.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.overlay.update.",
  "properties": {
    "name": {
      "description": "The name of the overlay that was updated",
    },
    "overlayId": {
      "description": "The unique ID of the updated overlay.",
    },
    "parentId": {
      "description": "The unique ID of the parent overlay.  If the updated overlay does not have a parent overlay, then this element value MUST be an empty string",
    }
  }
};
