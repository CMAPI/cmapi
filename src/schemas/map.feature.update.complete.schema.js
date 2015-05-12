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
          "format": {
            "type": "string",
            "default": "kml"
          },
          "feature": {
            "type": ["object", "string"],
            "additionalProperties": true
          },
          "readOnly": {
            "type": "boolean",
            "default": true
          },
          "properties": {
            "additionalProperties": true,
            "type": "object"
          },
          "url": {
            "type": "string"
          },
          "params": {
            "type": "boolean",
            "default": true
          } 
    },
    "required": ["featureId", "overlayId"]	
  }
};
