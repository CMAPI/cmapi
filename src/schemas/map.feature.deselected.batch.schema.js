cmapi.channel["map.feature.deselected.batch"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.deselected.batch",
    "description": "De-Select, or report that a collection of feature objects were de-selected.",
    "type": "object",
    "properties": {
      "features": {
        "description": "An array of map.feature.deSelected payload objects.  See map.feature.deSelected for the object format and schema",
        "type": "array"
      },
      "overlayId": {
        "description": "The default overlayId to be applied to all map.feature.deSelected objects in the payloads array that don't include an overlayId. I.e., similar behavior to CSS.  See map.feature.deSelected for more details",
        "type": "string"
      }
    },
    "required": ["features"]
  }
};
