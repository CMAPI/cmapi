cmapi.channel["map.feature.selected.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.selected.",
  "properties": {
		"selectedId": {
          "description": "The selectedId passed in the original message.  If no selectedId was passed in the original message, then this value MUST be an empty string",
          "default": ""
        },
        "selectedName": {
          "description": "The name passed in the original message.  If no name passed in original message, then this value MUST be an empty string",
          "default": ""
        },
        "overlayId": {
          "description": "The ID of the overlay the selected feature is loaded into.",
          "default": ""
        },
        "featureId": {
          "description": "Unique identifier for the selected feature.",
          "default": ""
        }
  }
};
