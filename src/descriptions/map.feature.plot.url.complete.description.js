cmapi.channel["map.feature.plot.url.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.url.",
  "properties": {	  
        "overlayId": {
          "description": "The ID of the overlay this feature was loaded into.",
          "defaultValue": ""
        },
        "featureId": {
          "description": "Unique identifier for the given feature data.",
          "defaultValue": ""
        },
        "name": {
          "description": "Name for the given feature data.  If no name was passed in the original message, this MUST contain the name that was actually assigned to the feature.  If no name was assigned to the feature, then this MUST return an empty string",
          "defaultValue": ""
        },
        "format": {
          "description": "Data format of the given feature.",
          "defaultValue": ""
        },
        "url": {
          "description": "The url provided in the original message.",
          "defaultValue": ""
        },
        "params": {
          "description": "The parameters passed in the original message.  If original message did not contain a params object, then this value MUST be an empty object or string",
          "defaultValue": ""
        },
		"zoom": {
          "description": "The zoom parameter value passed in the original message. If no value passed in original message, this MUST be set to the default value of the original message",
          "defaultValue": ""
        }
  }
};
