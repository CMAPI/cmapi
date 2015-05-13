cmapi.channel["map.feature.update.complete"] = {
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
          },
          "name": {
            "type": "string"
          },
          "newOverlayId": {
            "type": "string",
          }
    },
    "required": ["overlayId", "featureId", "name", "newOverlayId"]	
  }
};
