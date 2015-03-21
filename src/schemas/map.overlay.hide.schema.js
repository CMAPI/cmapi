cmapi.channel["map.overlay.hide"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.hide",
    "description": "Hide existing overlay on the map.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay to be hidden. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. ",
        "type": "string",
        "default": "sending widget's ID"
      }
    },
    "required": []
  }
};
