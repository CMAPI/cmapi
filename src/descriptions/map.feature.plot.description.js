cmapi.channel["map.feature.plot"].description = {
  "description": "Plots feature data on the map.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, the new feature is merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
      "defaultValue": "sender.id"
    },
    "featureId": {
      "description": "Unique identifier for the given feature data. Note that feature IDs MUST be unique within a given overlay. Reusing a feature ID will be considered a reload, with the original feature data being removed and replaced by the new feature data.",
      "defaultValue": ""
    },
    "name": {
      "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
      "defaultValue": ""
    },
    "format": {
      "description": "Data format of the given feature. All map implementations MUST support 'kml' and 'geojson'.  If no format is specified, the format defaults to kml. A list of formats supported by a particular map implementation may be obtained by querying the map using the map.status channel (see map.status).  More details about feature formats can be found in the map.feature Data Formats section of the documentation.",
      "defaultValue": "'kml'",
      "allowableValues" : "A single string value of 'kml' or 'geojson'"
    },
    "feature": {
      "description": "Feature data to be loaded into the map.   See Appendix A for additional information on required KML support, Appendix B for information on required GeoJSON, and Appendix C for information on Area of Interest (AOI) support.",
      "defaultValue": ""
    },
    "zoom": {
      "description": "true if map should zoom to newly loaded feature data, false if not. Default is false.",
      "defaultValue": false
    },
    "readOnly": {
      "description": "Valid values are true or false. If true, then the end user MUST NOT be able to edit the feature from the map’s user interface, if false the end user MAY edit the feature from the map’s user interface. Default value is true.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
      "defaultValue": true
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    }
  }
};
