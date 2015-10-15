cmapi.channel["map.feature.plot.batch"].description = {
  "description": "Plots a batch of feature data on the map.",
  "properties": {
    "features": {
      "description": "An array of map.feature.plot payloads minus the messageId and zoom properties.  See map.feature.plot for the object format and schema",
      "default": ""
    },
    "overlayId": {
      "description": "The default overlayId to be applied to all feature objects in the features array that don’t include an overlayId. I.e., similar behavior to CSS.  See map.feature.plot for more details",
      "default": ""
    },
    "format": {
      "description": "The default format to be applied to all feature objects in the features array that don’t include a format value. I.e., similar behavior to CSS.  See map.feature.plot for definition of format property.   More details about feature formats can be found in the map.feature Data Formats section of the documentation.",
      "default": ""
    },
	"zoom": {
		"description": "True if map should zoom so that the extents of the map should be set to display all of the newly loaded feature data, false if not. Default is false.",
		"default": ""
	},
    "readOnly": {
      "description": "The default value for readOnly to be applied to all feature objects in the features array that don’t include a readOnly value. I.e., similar behavior to CSS.  See map.feature.plot for definition of readOnly property.",
      "default": ""
    }
  }
};
