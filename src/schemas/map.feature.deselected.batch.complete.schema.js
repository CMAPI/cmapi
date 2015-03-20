cmapi.channel["map.feature.deselected.batch.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.deselected.batch.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature identifier objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature.",
                  "type": "string"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
