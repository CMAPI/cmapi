cmapi.channel["map.feature.plot.batch.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.batch.",
  "properties": {
    "features": {
      "description": "An array of feature objects.",
      "default": "",
      "properties": {
        "overlayId": {
          "description": "The ID of the overlay this feature was loaded into.",
          "default": ""
        },
        "featureId": {
          "description": "Unique identifier for the given feature data.",
          "default": ""
        },
        "name": {
          "description": "Name for the given feature data.",
          "default": ""
        },
        "format": {
          "description": "Data format of the given feature.",
          "default": ""
        },
        "feature": {
          "description": "Feature data loaded into the map.   See Appendix A for additional information on required KML support, Appendix B for information on required GeoJSON, and Appendix C for information on Area of Interest (AOI) support.",
          "default": ""
        },
		"zoom": {
			"description": "Zoom value set in original message - or default input value if no value was originally sent",
			"default":""
		},
        "readOnly": {
          "description": "Valid values are true or false. If true, then the end user MUST NOT be able to edit the feature from the map's user interface, if false the end user MAY edit the feature from the map’s user interface. Default value is true.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
          "default": ""
        },
        "properties": {
          "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message.",
          "default": ""
        }
      }
    }
  }
};
