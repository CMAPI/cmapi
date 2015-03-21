cmapi.channel["map.feature.plot.batch.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.batch.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature data.",
                  "type": "string"
                },
                "name": {
                  "description": "Name for the given feature data.",
                  "type": "string"
                },
                "format": {
                  "description": "Data format of the given feature.",
                  "type": "string",
                  "default": "kml"
                },
                "feature": {
                  "description": "Feature data loaded into the map.   See Appendix A for additional information on required KML support, Appendix B for information on required GeoJSON, and Appendix C for information on Area of Interest (AOI) support.",
                  "type": [
                    "object",
                    "string"
                  ],
                  "additionalProperties": true
                },
                "readOnly": {
                  "description": "Valid values are true or false. If true, then the end user MUST NOT be able to edit the feature from the map's user interface, if false the end user MAY edit the feature from the map’s user interface. Default value is true.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
                  "type": "boolean",
                  "default": true
                },
                "properties": {
                  "additionalProperties": true,
                  "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message.",
                  "type": "object"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
