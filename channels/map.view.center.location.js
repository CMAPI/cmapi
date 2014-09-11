cmapi.channel["map.view.center.location"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.location",
    "description": "Center the map on a particular location. The map may also be zoomed as close as possible to the location or to a given range",
    "type": "object",
    "properties": {
        "location": {
          "description": "Location to be centered in map.",
                  "default": "N/A",
          "type": "object",
          "properties": {
            "lat": {
              "type": "number",
              "description": "The latitude value of the point",
              "minimum": "-90",
              "maximum": "90"
            },
            "lon": {
              "type": "number",
              "description": "The longitude value of the point",
              "minimum": "-180",
              "maximum": "180"
            }
          },
          "required": ["lat", "lon"]
        },
        "zoom": {
          "description": "If auto, map will adjust to zoom as close as possible to the given location in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
          "type": ["string", "number"],
          "default": "N/A"
        },
        "messageId": {
          "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
          "type": "string",
          "status": "new",
          "extension": "User Manipulation - Message Complete"
        },
    },
    "required": ["location"]
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added optional messageId parameter to support user manipulation extension"
  }]
};