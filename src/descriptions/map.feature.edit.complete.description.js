cmapi.channel["map.feature.edit.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.edit.",
  "properties": {
    "overlayId": {
      "description": "The id of the overlay the feature that is to be edited.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The unique identifier for the feature to be edited. ",
      "defaultValue": ""
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    },
    "feature": {
      "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute",
      "defaultValue": ""
    },
    "format": {
      "description": "Data format of the given feature. See map.feature.plot for more details",
      "defaultValue": ""
    },
    "coordinates": {
      "description": "Array of objects which represent vertice locations associated with the object edited. Each object in the array is of the form {lat: number, lon: number, [alt: number]}.",
      "defaultValue": ""
    }
  }
};
