cmapi.channel["map.feature.plot.batch"].description = {
  "description": "Plots a batch of feature data on the map.",
  "properties": {
    "features": {
      "description": "An array of map.feature.plot payloads minus the messageId and zoom properties.  See map.feature.plot for the object format and schema",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The default overlayId to be applied to all feature objects in the features array that don’t include an overlayId. If omitted and the feature object also omits this property, the behavior SHALL be as documented in the map.feature.plot overlayId property.  See map.feature.plot for more details.",
      "defaultValue": "Sending widget's id"
    },
    "format": {
      "description": "The default format to be applied to all feature objects in the features array that don’t include a format value. See map.feature.plot for definition of format property.   More details about feature formats can be found in the map.feature Data Formats section of the documentation.",
      "defaultValue": ""
    },
	"zoom": {
		"description": "True if map should zoom so that the extents of the map should be set to display all of the newly loaded feature data, false if not. Default is false.",
		"defaultValue": ""
	},
    "readOnly": {
      "description": "The default value for readOnly to be applied to all feature objects in the features array that don’t include a readOnly value. See map.feature.plot for definition of readOnly property.",
      "defaultValue": ""
    }
  }
};
