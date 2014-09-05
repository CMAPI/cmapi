cmapi.channel["map.view.center.overlay"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.view.center.overlay",
        "description": "Center the map on a particular overlay. The map may also be zoomed to show the entire overlay (if possible) or to show a given range",
        "type": "object",
        "properties": {
            "overlayId": {
                "description": "The ID of the overlay to center on. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
                "type": "string",
                "default": "sending widget's ID"
            },
            "zoom": {
                "description": "Attribute that defines the zoom behaviour of the map. If auto, zoom will adjust to best fit the overlay in the user's viewable area.  If a number, map will zoom to specified range in meters.  If no zoom attribute is included, no zoom is performed.",
                "type": "string",
                "default": "N/A"
            }
        },
        "messageId": {
          "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
          "type": "string",
          "status": "new",
          "extension": "User Manipulation - Message Complete"
        },
        "required": []
    },
    notes: []
}


