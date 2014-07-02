cmapi.channel["map.feature.update"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.feature.update",
        "description": "Update an existing feature on the map.",
        "type": "object",
        "properties": {
                  "overlayId": {
                    "description": "The ID of the overlay where the feature to be updated is currently found. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed.",
                    "type": "string",
					"default": "sending widget's ID"
                },
                "featureId": {
                    "description": "The ID of the feature to be updated",
                    "type": "string",
					"default": "none"
                },
                "name": {
                    "description": "If the name provided differs from the feature's current name, the display value will be changed to show the new value.  If no value is provided, the feature name will remain unchanged.",
                    "type": "string",
					"default": "none"
                },
                "newOverlayId": {
                    "description": "This represents the ID of an overlay to move the feature to.  If this attribute is provided, the feature MUST be removed from its current overlay and added to the overlay with this ID.  If an overlay with an ID of newOverlayId does not exist, a new overlay will be created with an ID of newOverlayId, and the feature to be updated will be moved to the overlay identified by newOverlayId.",
                    "type": "string",
					"default": "none"
                }
        },
        "required": ["featureId"]
    },
    notes: [
    'In order to update the feature data itself, use the map.feature.plot or map.feature.plot.url message and use the existing featureId'
    ]
}


