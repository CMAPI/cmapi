cmapi.channel["map.feature.edit.progress"].description = {
  "description": "Schema for the details object for a map.message.progress message during a map.feature.edit.",
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
    "status": {
      "description": "A pre-defined string indicating the type of progress. <ul><li>start - indicates that the map has placed the feature into edit mode.</li><li>update - indicates that the map has modified the feature.</li></ul>",
      "defaultValue": ""
    },
    "updates": {
      "description": "This object contains the details of the changes made during the draw operation.",
      "defaultValue": "",
      "properties": {
        "type": {
          "description": "This field identifies the operation performed.  Allowable values are 'add', 'update', and 'remove'",
          "defaultValue": ""
        },
        "indices": {
          "description": "This field is an array of integer indexes identifying the coordinates affected. This array can be empty if the operation applies to property other than a coordinate.",
          "defaultValue": ""
        },
        "coordinates": {
          "description": "This field is an array of all the objects coordiantes. Each coordinate object is as follows {lat: number, lon: number, [alt: number]}.",
          "defaultValue": ""
        }
      }
    }
  }
};
