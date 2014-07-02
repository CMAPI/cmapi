cmapi.channel["map.overlay.cluster.remove"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.cluster.remove",
    "description": "Sets the clustering rule for a specified overlay.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the clustering rule is to be applied. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. ",
        "type": "string"
      }
    },
    "required": []
  },
  notes: []
};