cmapi.channel["map.feature.unplot"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.unplot",
    "description": "Removes feature data from the map.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the feature to be removed is found. If no overlayId is included, default overlay with an ID equal to sending widget's ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "featureId": {
        "description": "The ID of the feature to be removed.",
        "type": "string",
        "default": "N/A"
      }
    },
    "required": ["featureId"]
  }
};
