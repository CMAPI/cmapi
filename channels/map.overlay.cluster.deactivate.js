cmapi.channel["map.overlay.cluster.deactivate"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.cluster.deactivate",
    "description": "Deacrtivate the clustering rule for a specified overlay.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the clustering rule is to be deactivated. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
        "type": "string"
      }
    },
    "required": []
  },
  notes: []
};