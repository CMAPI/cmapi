cmapi.channel["map.feature.draw.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.draw.",
  "properties": {
    "overlayId": {
      "description": "The id of the overlay the feature that is to be edited.",
      "default": ""
    },
    "featureId": {
      "description": "The unique identifier for the feature to be edited. ",
      "default": ""
    },
    "name": {
      "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
      "default": ""
    },
    "type": {
      "description": "Type of feature to be drawn.  Options are line, polygon, point or symbol.  This field may be overloaded to handle future draw types such as bufferedline, circle, aoi, etc.",
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
      "description": "Array of objects which represent vertice locations associated with the object drawn. Each object in the array is of the form {lat: number, lon: number, [alt: number]}.",
      "default": ""
    }
  }
};
