cmapi.channel["map.feature.plot.url.complete"] = {
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
          "url": {
            "type": "string"
          },
		  "params": {
			"type": "object"
		  },
          "zoom": {
            "type": "boolean"
          } 
    },
    "required": ["featureId", "overlayId","name","format","url","params","zoom"]
  }
};

