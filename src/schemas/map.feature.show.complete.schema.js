cmapi.channel["map.feature.show.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "type": "object",
    "properties": {		
          "overlayId": {
            "type": "string"
          },
          "featureId": {
            "type": "string"
          }	
    },
    "required": ["featureId", "overlayId"]
  }
};
