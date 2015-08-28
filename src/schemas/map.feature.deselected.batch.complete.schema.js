cmapi.channel["map.feature.deselected.batch.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "type": "object",
    "properties": {
      "features": {
        "type": "array",
        "properties": {
          "deSelectedId": {
		    "type": "string"
          },
          "deSelectedName": {
            "type": "string"
          },
          "overlayId": {
            "type": "string"
          },
          "featureId": {
            "type": "string"
          }		 
        },
        "required": ["deSelectedId", "deSelectedName", "featureId", "overlayId"]
      }
    },
    "required": ["features"]
  }
};
