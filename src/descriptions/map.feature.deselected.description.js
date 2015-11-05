cmapi.channel["map.feature.deselected"].description = {
  "description": "De-Select, or report that object was de-selected.",
  "properties": {
    "deSelectedId": {
      "description": "The ID of the object to be de-selected (may be a sub-feature contained within the aggregate feature data with the given featureId).",
      "defaultValue": ""
    },
    "deSelectedName": {
      "description": "The name of the de-selected object.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The ID of the feature that contains the de-selected object.",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The ID of the overlay which contains the de-selected object. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    }
  }
};
