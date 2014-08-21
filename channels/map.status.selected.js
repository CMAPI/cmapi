cmapi.channel["map.status.selected"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.selected",
    "description": "Send out the list of currently selected features.",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string",
		"default": " ",
        "description": "The ID of the overlay which contains the selected objects."
      },
      "selectedFeatures": {
        "description": "An array of features from the identified overlay that are currently selected.",
        "type": "array",
		"default": " ",
		"properties": {
		"selectedFeature": {
			"description": "Individual selected feature object",
			"type": "object",
          "properties": {
            "featureId": {
              "type": "string",
              "description": "The ID of the feature that contains the selected object."
            },
            "selectedId": {
              "type": "string",
              "description": "The ID of the actual selected object (may be a sub-feature contained within the aggregate feature data with the given featureId)."
            },
            "selectedName": {
              "type": "string",
              "description": "The name of the selected object."
            }
          },
          "required": ["featureId"]
		  }
		 }
      }
    },
    "required": ["overlayId", "selectedFeatures"]
  },
  "notes": [
    "Within a given selectedFeature, although both selectedId and selectedName are optional, one MUST be passed in if a sub-feature is to be identified. Generally, selectedId is preferred and selectedName is used when no selectedId is available. The implication of this is that if sub-features cannot be identified, they cannot be selected.",
    "The payload sent out in map.selected.status is intended to be itself an array.",
	"If the list of selected objects spans multiple overlays, then the payload will be an array of messages – one message for each overlay that contains selected objects."
  ]
};