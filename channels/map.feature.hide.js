cmapi.channel["map.feature.hide"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.feature.hide",
        "description": "Hide existing feature on the map.",
        "type": "object",
        "properties": {
                  "overlayId": {
                    "description": "The ID of the overlay where the feature to be hidden is found. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed.",
                    "type": "string",
					"default": "sending widget's ID"
                },
                "featureId": {
                    "description": "The ID of the feature to be hidden.",
                    "type": "string",
					"default": "N/A"
                }
        },
        "required": ["featureId"]
    },
    notes: []
}


