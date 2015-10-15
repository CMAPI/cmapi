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
      "description": "Type of feature to be drawn.  Supported types include 'line', 'polygon', 'point' or 'symbol'.  Optional types include 'bufferedline', 'circle', 'aoi', and 'airspace'.  Additional types may be added in the future.",
      "default": ""
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "default": ""
    },
    "feature": {
      "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute",
      "default": ""
    },
    "format": {
      "description": "Data format of the given feature. See map.feature.plot for more details",
      "default": ""
    },
    "coordinates": {
      "description": "Array of objects which represent vertice locations associated with the object drawn. Each object in the array is of the form {lat: number, lon: number, [alt: number]}.",
      "default": ""
    }
  }
};
