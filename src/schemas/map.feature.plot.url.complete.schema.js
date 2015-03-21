cmapi.channel["map.feature.plot.url.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.url.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature data.",
                  "type": "string"
                },
                "name": {
                  "description": "Name for the given feature data.",
                  "type": "string"
                },
                "format": {
                  "description": "Data format of the given feature.",
                  "type": "string",
                  "default": "kml"
                },
                "url": {
                  "description": "The url provided in the original message.",
                  "type": "string"
                },
                "params": {
                  "description": "The parameters passed in the original message.",
                  "type": "boolean",
                  "default": true
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
