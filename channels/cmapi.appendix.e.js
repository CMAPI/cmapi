cmapi.channel["cmapi.appendix.e"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "Appendix E - MilStd Symbology",
    "description": "This optional extension defines the format of the map.feature.plot channel payload for MilStd features. The feature attibute below defines the format and content of the features attibute of the map.feature.plot. The properties.modifiers attribute defines the milstd modifiers that the map implementation shall apply to the feature.",
    "type": "object",
    "required": ["aoi"],
    "properties": {
      "feature": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "feature",
        "description": "The feature attribute of the map.feature.plot payload.",
        "type": "object",
        "properties": {
          "symbolCode": {
            "type": "string",
            "description": "The 15 character milstd2525 symbol code for the graphic.",
            "minimum": 1
          },
          "type": {
            "enum": ["point", "polygon", "lineString"],
            "description": "Defines the geojson format of the coordinates in the coordinate attribute."
          },
          "coordinates": {
              "type": "object, array",
              "description": "This attribute MUST contain a valid geojson coordinate structure for the type indicated in the type attribute. See http://geojson.org/geojson-spec.html for the valid format."
          }

        },
        "required": ["symbolCode", "type", "coordinates"]
      },
      "properties":{
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "properties",
        "description": "The properties attribute of the map.feature.plot payload. Which in addition to other attributes that may be present, it must contain the following attribute.",
        "type": "object",
        "properties": {
          "modifiers": {
            "type": "object",
            "description": "The milstd2525 modifiers required for the graphic.",
            "properties":{
                "standard":{
                    "type": "string",
                    "description": "Which MIL-STD-2525 to use when interpreting the graphic.  Can be '2525b' or '2525c'.  Defaults to '2525b'"
                },
                "size":{
                    "type": "integer",
                    "description": "The pixels dimensions of a single point icon when it is drawn.  This modifier is not found in the MIL-STD-2525."
                },
                "additionalInfo1":{
                    "type": "string",
                    "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "additionalInfo2":{
                    "type": "string",
                    "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "additionalInfo3":{
                    "type": "string",
                    "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "altitudeDepth":{
                    "type": "array",
                    "description": "An array of numbers."
                },
                "azimuth":{
                    "type": "array",
                    "description": "An array of numbers between -360 to 360"
                },
                "combatEffectiveness":{
                    "type": "string",
                    "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "dateTimeGroup1":{
                    "type": "string",
                    "description": "A date/time in format of 'DDHHMMSSZMONYYYY'."
                },
                "dateTimeGroup2":{
                     "type": "string",
                     "description": "A date/time in format of 'DDHHMMSSZMONYYYY'"
                },
                "directionOfMovement":{
                     "type": "number",
                     "description": "A number between 0-360"
                },
                "distance":{
                     "type": "array",
                     "description": "An array of numbers"
                },
                "equipmentType":{
                     "type": "string",
                     "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "evaluationRating":{
                     "type": "string",
                     "description": "2 character string. [A-F][1-6].  Example: A6"
                },
                "higherFormation":{
                     "type": "string",
                     "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "heading":{
                     "type": "number",
                     "description": "Controls the rotation for single point icons.  Can be a number between -360 to 360."
                },
                "hostile":{
                     "type": "string",
                     "description": "Always set to 'ENY'"
                },
                "iffSif":{
                     "type": "string",
                     "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "location":{
                     "type": "string",
                     "description": "The location of the symbol. This is a label and not necessarily the position of the actual symbol."
                },
                "quantity":{
                     "type": "string",
                     "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "offsetIndicator":{
                     "type": "string",
                     "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "reinforcedOrReduced":{
                     "type": "string",
                     "description": "Use '(+)', '(-)' or '(+/-)'"
                },
                "signatureEquipment":{
                     "type": "string",
                     "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "specialC2Headquarters":{
                     "type": "string",
                     "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "speed": {
                     "type": "string",
                     "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "staffComments":{
                     "type": "string",
                     "description": "As defined in the milstd2525 specification for the symbol in question."
                },
                "uniqueDesignation1":{
                     "type": "string",
                     "description": "Usually the label that identifies the Symbol.   Corresponds to the 'T' or 'T1' field in the MIL-STD-2525"
                },
                "uniqueDesignation2": {
                     "type": "string",
                     "description": "A label that supplements the identity of the Symbol.  Corresponds to the 'T2' field in the MIL-STD-2525"
                }
            }
          }
        },
        "required": ["modifiers"]
      }
    }
  },
  notes: []
};