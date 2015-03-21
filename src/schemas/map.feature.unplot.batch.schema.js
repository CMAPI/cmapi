cmapi.channel["map.feature.unplot.batch"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.unplot.batch",
    "description": "Remove collection of features from the map.",
    "type": "object",
    "properties": {
      "features": {
        "description": "An array of map.feature.unplot payloads minus the messageId.  See map.feature.unplot for the object format and schema",
        "type": "Array"
      },
      "overlayId": {
        "description": "when included at the array level, this value will be applied to all map.feature.unplot objects in the features array that don't include an overlayID. I.e., similar behavior to CSS.  See map.feature.unplot for definition of this property",
        "type": "string",
        "default": ""
      }
    },
    "required": ["features"]
  }
};
