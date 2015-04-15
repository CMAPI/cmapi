cmapi.channel["map.feature.draw.progress"].description = {
  "description": "Schema for the details object for a map.message.progress message during a map.feature.draw.",
  "properties": {
    "overlayId": {
      "description": "The id of the overlay the feature that is to be edited.",
      "default": ""
    },
    "featureId": {
      "description": "The unique identifier for the feature to be edited. ",
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
    "updates": {
      "description": "This object contains the details of the changes made during the draw operation.",
      "default": "",
      "properties": {
        "type": {
          "description": "This field identifies the operation performed.",
          "default": ""
        },
        "indices": {
          "description": "This field is an array of integer indexes identifying the coordinates affected. This array can be empty if the operation applies to property other than a coordinate.",
          "default": ""
        },
        "coordinates": {
          "description": "This field is an array of all the objects coordiantes. Each coordinate object is as follows {lat: number, lon: number, [alt: number]}.",
          "default": ""
        }
      }
    }
  }
};
