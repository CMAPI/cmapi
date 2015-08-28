cmapi.channel["map.feature.selected.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "type": "object",
    "properties": {
		  "selectedId": {
		    "type": "string"
          },
          "selectedName": {
            "type": "string"
          },
          "overlayId": {
            "type": "string"
          },
          "featureId": {
            "type": "string"
          }		  
    },
    "required": ["selectedId","selectedName","featureId", "overlayId"]
  }
};
