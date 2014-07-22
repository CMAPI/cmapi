cmapi.channel["map.feature.plot.batch"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot.batch",
    "description": "Plots a batch of feature data on the map.",
    "type": "object",
    "properties": {
      "features": {
        "type": [{
          "type": "object",
          "properties": {
            "overlayId": {
              "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, the new feature is merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget’s ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
              "type": "string",
              "default": "sending widget's ID"
            },
            "featureId": {
              "description": "Unique identifier for the given feature data. Note that feature IDs MUST be unique within a given overlay. Reusing a feature ID will be considered a reload, with the original feature data being removed and replaced by the new feature data.",
              "type": "string"
            },
            "name": {
              "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
              "type": "string"
            },
            "format": {
              "description": "Data format of the given feature. All map implementations MUST support “kml” and “geojson”.  If no format is specified, the format defaults to “kml.” A list of formats supported by a particular map implementation may be obtained by querying the map using the map.status channel (see map.status).",
              "type": "string",
              "default": "kml"
            },
            "feature": {
              "description": "Feature data to be loaded into the map.   See Appendix A for additional information on required KML support, Appendix B for information on required GeoJSON, and Appendix C for information on Area of Interest (AOI) support.",
              "type": [
                "object",
                "string"
              ]
            },
            "zoom": {
              "description": "true if map should zoom to newly loaded feature data, false if not. Default is false.",
              "type": "boolean",
              "default": false
            },
            "readOnly": {
              "description": "Valid values are “true” or “false”. If “true”, then the end user MUST NOT be able to edit the feature from the map’s user interface, if “false” the end user MAY edit the feature from the map’s user interface. Default value is “true”.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
              "type": "boolean",
              "default": true
            }
          }
        }]
      },
      "overlayId": {
        "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, the new feature is merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget’s ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
        "type": "string",
        "default": "sending widget's ID"
      }
      "readOnly": {
        "description": "Valid values are “true” or “false”. If “true”, then the end user MUST NOT be able to edit the feature from the map’s user interface, if “false” the end user MAY edit the feature from the map’s user interface. Default value is “true”.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
        "type": "boolean",
        "default": true
      }
    },
    "required": ["features"]
  },
  notes: [
    'If using the channel shouter to send a feature, embedded quotes in KML MUST be escaped with a backward slash (that is, use \\" instead of ").',
    'If sending GeoJSON follow the guidance in Appendix B for style information.',
    'When plotting an Area of Interest, the format MUST be “geojson” AND the aoi object defined in Appendix B MUST be included as part of the GeoJSON parameters object.'
  ]
};