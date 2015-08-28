cmapi.channel["map.feature.plot.complete"] = {
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
            "type": "string"
          },
          "feature": {
            "type": ["object", "string"],
            "additionalProperties": true
          },
		  "zoom": {
            "type": "boolean",
          }, 
          "readOnly": {
            "type": "boolean",
          },
          "properties": {
            "additionalProperties": true,
            "type": "object"
          }
    },
     "required": ["featureId", "overlayId", "name","format","feature","zoom","readOnly","properties"]
  }
};
