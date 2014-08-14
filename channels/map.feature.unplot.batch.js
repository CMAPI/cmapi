cmapi.channel["map.feature.unplot.batch"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.unplot.batch",
    "description": "Plots a batch of feature data on the map.",
    "type": "object",
    "properties": {
      "payloads": {
        "description" : "An array of map.feature.unplot payloads.  See map.feature.unplot for the object format and schema",
        "type": "Array"
      },
      "overlayId": {
        "description": "when included at the array level, this value will be applied to all map.feature.unplot objects in the features array that don’t include the corresponding element . I.e., similar behavior to CSS.  See map.feature.unplot for definition of this property",
        "type": "string",
        "default": "sending widget's ID"
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  If the messageId property exists on a message, maps that support the user manipulation extension MUST respond with map.message.complete and map.message.progress messages defined in the User Manipulation extension using the messageId to indicate which message the complete or progress message applies to.  Messages will maintain the same id throughout the lifetime of the message. The messageId can also be used for the map.message.cancel channel defined in the User Manipulation Extension.",
        "type": "string"
      }
    },
    "required": ["payloads"]
  },
  notes: [
    ]
};