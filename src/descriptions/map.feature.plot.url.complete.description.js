cmapi.channel["map.feature.plot.url.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.url.",
  "properties": {	  
        "overlayId": {
          "description": "The ID of the overlay this feature was loaded into.",
          "default": ""
        },
        "featureId": {
          "description": "Unique identifier for the given feature data.",
          "default": ""
        },
        "name": {
          "description": "Name for the given feature data.  MUST be empty string if original message did not contain a name value",
          "default": ""
        },
        "format": {
          "description": "Data format of the given feature.",
          "default": ""
        },
        "url": {
          "description": "The url provided in the original message.",
          "default": ""
        },
        "params": {
          "description": "The parameters passed in the original message.  If original message did not contain a params object, then this value MUST be an empty object or string",
          "default": ""
        },
		"zoom": {
          "description": "The zoom parameter value passed in the original message - will be set to default input value if original message does not contain an actual value",
          "default": ""
        }
  }
};
