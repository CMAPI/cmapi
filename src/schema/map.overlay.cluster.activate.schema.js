cmapi.channel["map.overlay.cluster.activate"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.cluster.activate",
    "description": "Activate the clustering rule for the specified overlay.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the clustering rule is to be activated. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. ",
        "type": "string",
		"default": "sending widget's ID"
      }
    },
    "required": []
  },
  notes: []
};