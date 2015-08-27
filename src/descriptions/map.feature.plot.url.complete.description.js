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
          "description": "Name for the given feature data.  If no name was passed in the original message, this MUST contain the name that was actually assigned to the feature.  If no name was assigned to the feature, then this MUST return an empty string",
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
