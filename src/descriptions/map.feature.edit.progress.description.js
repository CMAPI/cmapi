cmapi.channel["map.feature.edit.progress"].description = {
  "description": "Schema for the details object for a map.message.progress message during a map.feature.edit.",
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
    "status": {
      "description": "A pre-defined string indicating the type of progress. <ul><li>start - indicates that the map has placed the feature into edit mode.</li><li>update - indicates that the map has modified the feature.</li></ul>",
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
