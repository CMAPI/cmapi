cmapi.channel["map.feature.deselected.batch"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.deselected.batch",
    "description": "De-Select, or report that a collection of feature objects were de-selected.",
    "type": "object",
    "properties": {
      "payloads": {
        "description": "An array of map.feature.deSelected payload objects.  See map.feature.deSelected for the object format and schema",
        "type": "Array"
      },
      "overlayId": {
        "description": "The default overlayId to be applied to all map.feature.deSelected objects in the payloads array that don't include an overlayId. I.e., similar behavior to CSS.  See map.feature.deSelected for more details",
        "type": "string",
        "default": ""
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string"
      }
    },
    "required": ["payloads"]
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]
};
