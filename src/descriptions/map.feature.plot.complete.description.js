cmapi.channel["map.feature.plot.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.",
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
        "feature": {
          "description": "Feature data loaded into the map.  If the actual feature data that was loaded onto the map differs from what was originally sent, this message MUST contain the actual feature data loaded",
          "defaultValue": ""
        },
		"zoom": {
          "description": "Zoom value passed in original message - or default if no value was passed in",
          "defaultValue":""
        },
        "readOnly": {
          "description": "readOnly value passed in the original message, or default if no value was passed in original message",
          "defaultValue":""
        },
        "properties": {
          "description": "Properties object passed in original message.  If no properties value was passed in original message, this value MUST be an empty object",
          "defaultValue": ""
        }
  }
};
