cmapi.channel["map.feature.deselected.batch.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.deselected.batch.",
  "properties": {
    "features": {
      "description": "An array of feature identifier objects.",
      "defaultValue": "",
      "properties": {
       "deSelectedId": {
          "description": "The deSelectedId passed in the original message.  If no deSelectedId was passed in the original message, then this value MUST be an empty string",
          "defaultValue": ""
        },
        "deSelectedName": {
          "description": "The name passed in the original message.  If no name passed in original message, then this value MUST be an empty string",
          "defaultValue": ""
        },
        "overlayId": {
          "description": "The ID of the overlay containing the deselected feature.",
          "defaultValue": ""
        },
        "featureId": {
          "description": "Unique identifier for the deselected feature.",
          "defaultValue": ""
        }	
      }
    }
  }
};
