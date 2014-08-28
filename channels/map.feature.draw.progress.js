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
      "type": {
        "description": "Type of feature to be drawn.  Options are line, polygon, point or symbol.  This field may be overloaded to handle future draw types such as bufferedline, circle, aoi, etc.",
        "type": "string"
      },
      "properties": {
        "description": "A properties object defining the appearance of the graphic being drawn",
        "type": "object"
      },
      "feature": {
        "type": "object",
        "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute"
      },
      "format": {
        "type": "string",
        "description": "Type of feature data based on the map.feature.plot type"
      },
      "updates": {
        "type": "array",
        "description": "Array of vertice locations that have been changed, added, or removed"
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string",
        "status": "new"
      }
    },
    "required": ["featureId", "messageId"]
  },
  "notes": [
    "This is the format of the dtails object to be used in a map.message.progress event for feature drawing."
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This details object is new"
  }]
};
