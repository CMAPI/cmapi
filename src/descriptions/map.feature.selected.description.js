cmapi.channel["map.feature.selected"].description = {
  "description": "Select, or report that object was selected.",
  "properties": {
    "selectedId": {
      "description": "The ID of the object to be selected (may be a sub-feature contained within the aggregate feature data with the given featureId).",
      "defaultValue": ""
    },
    "selectedName": {
      "description": "The name of the selected object.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The ID of the feature that contains the selected object.",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The ID of the overlay which contains the selected object. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": ""
    }
  }
};
