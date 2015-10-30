cmapi.channel["map.feature.selected.batch.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.selected.batch.",
  "properties": {
    "features": {
      "description": "An array of feature ID's.",
      "defaultValue": "",
      "properties": {
			"selectedId": {
			  "description": "The selectedId passed in the original message.  If no selectedId was passed in the original message, then this value MUST be an empty string",
			  "defaultValue": ""
			},
			"selectedName": {
			  "description": "The name passed in the original message.  If no name passed in original message, then this value MUST be an empty string",
			  "defaultValue": ""
			},
			"overlayId": {
			  "description": "The ID of the overlay containing the selected feature.",
			  "defaultValue": ""
			},
			"featureId": {
			  "description": "Unique identifier for the selected feature.",
			  "defaultValue": ""
			}
      }
    }
  }
};
