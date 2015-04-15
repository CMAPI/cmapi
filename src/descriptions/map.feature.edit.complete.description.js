cmapi.channel["map.feature.edit.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.edit.",
  "properties": {
    "overlayId": {
      "description": "The id of the overlay the feature that is to be edited.",
      "default": ""
    },
    "featureId": {
      "description": "The unique identifier for the feature to be edited. ",
      "default": ""
    },
    "properties": {
      "description": "A properties object defining the appearance of the graphic being drawn",
      "default": ""
    },
    "feature": {
      "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute",
      "default": ""
    },
    "format": {
      "description": "Type of feature data based on the map.feature.plot type",
      "default": ""
    },
    "coordinates": {
      "description": "Array of objects which represent vertice locations associated with the object edited. Each object in the array is of the form {lat: number, lon: number, [alt: number]}.",
      "default": ""
    }
  }
};
