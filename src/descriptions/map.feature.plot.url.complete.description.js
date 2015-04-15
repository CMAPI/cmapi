cmapi.channel["map.feature.plot.url.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.url.",
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
          "default": "kml"
        },
        "url": {
          "description": "The url provided in the original message.",
          "default": ""
        },
        "params": {
          "description": "The parameters passed in the original message.",
          "default": true
        }
      }
    }
  }
};
