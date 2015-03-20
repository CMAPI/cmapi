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
      }
    },
    "required": []
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added optional messageId parameter to support user manipulation extension"
  }]
};
