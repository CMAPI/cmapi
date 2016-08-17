cmapi.channel["map.feature.unplot.batch"].description = {
  "description": "Remove collection of features from the map.",
  "properties": {
    "features": {
      "description": "An array of map.feature.unplot payloads minus the messageId.  See map.feature.unplot for the object format and schema",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "when included at the array level, this value will be applied to all map.feature.unplot objects in the features array that don't include an overlayID.  See map.feature.unplot for definition of this property",
      "defaultValue": "Sending widget's id"
    }
  }
};
