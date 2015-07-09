cmapi.channel["map.feature.show.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.show.",
  "properties": {	  
        "overlayId": {
          "description": "The ID of the overlay this feature was loaded into.",
          "default": ""
        },
        "featureId": {
          "description": "Unique identifier for the given feature.",
          "default": ""
        },
		"zoom": {
          "description": "zoom value passed in original message.  If no value passed in original message, this MUST be set to the default value of the original message",
          "default": ""
        }
  }
};
