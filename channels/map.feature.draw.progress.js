cmapi.channel["map.feature.draw.progress"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.feature.draw.progress",
        "description": "Schema for the details object for a map.message.progress message during a map.feature.draw.",
        "type": "object",
        "properties": {
            "overlayId": {
                "description": "The id of the overlay the feature that is to be edited.",
                "type": "string"
            },
            "featureId": {
                "description": "The unique identifier for the feature to be edited. ",
                "type": "string"
            },
            "messageId": {
                "description": "A unique id allowing the map to dispatch a response to this message.  See map.message channels.",
                "type": "string"
            },
            "type": {
                "description": "Type of feature to be drawn.  Options are line, polygon, point or symbol.  This field may be overloaded to handle future draw types such as bufferedline, circle, aoi, etc.",
                "type": "string"
            },
            "properties": {
                "description": "A properties object defining the appearance of the graphic being drawn",
                "type": "object"
            }
        },
        "required": ["featureId", "messageId"]
    },
    notes: [
        "This is the format of the dtails object to be used in a map.message.progress event for feature drawing."
    ]
};
