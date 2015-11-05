cmapi.channel["map.feature.plot.batch.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.batch.",
  "properties": {
    "features": {
      "description": "An array of feature objects.",
      "defaultValue": "",
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
          "description": "Name for the given feature data.",
          "defaultValue": ""
        },
        "format": {
          "description": "Data format of the given feature.",
          "defaultValue": ""
        },
        "feature": {
          "description": "Feature data loaded into the map.   If the actual feature data that was loaded onto the map differs from what was originally sent, this message MUST contain the actual feature data loaded",
          "defaultValue": ""
        },
		"zoom": {
			"description": "Zoom value set in original message. If no value passed in original message, this MUST be set to the default value of the original message",
			"defaultValue":""
		},
        "readOnly": {
          "description": "Value identifying whether the feature is editable from the map's user interface or not. Valid values are true or false. Value MUST match the actual state of the feature - whether that state matches the passed in value or not.  Value MUST be 'true' if the end user IS NOT able to edit the feature from the map's user interface, or MUST be 'false' if the end user MAY edit the feature from the map’s user interface.",
          "defaultValue": ""
        },
        "properties": {
          "description": "Properties passed in the original message.  If no properties value was passed in original message, this value MUST be an empty object",
          "defaultValue": ""
        }
      }
    }
  }
};
