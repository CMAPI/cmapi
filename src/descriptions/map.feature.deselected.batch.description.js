cmapi.channel["map.feature.deselected.batch"].description = {
  "description": "De-Select, or report that a collection of feature objects were de-selected.",
  "properties": {
    "features": {
      "description": "An array of map.feature.deSelected payload objects.  See map.feature.deSelected for the object format and schema",
      "default": ""
    },
    "overlayId": {
      "description": "The default overlayId to be applied to all map.feature.deSelected objects in the payloads array that don't include an overlayId. I.e., similar behavior to CSS.  See map.feature.deSelected for more details",
      "default": ""
    }
  }
};
