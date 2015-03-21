cmapi.channel["map.feature.plot.symbol"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.symbol",
    "description": "This optional extension defines the format of the map.feature.plot channel payload for symbols. The feature attibute below defines the format and content of the features attibute of the map.feature.plot. The properties.modifiers attribute defines the modifiers that the map implementation shall apply to the feature. This schema provides a general framework for different symbology standards such as MIL-STD-2525 and NATO APP-6",
    "type": "object",
    "required": ["feature"],
    "properties": {
      "feature": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "feature",
        "description": "The feature attribute of the map.feature.plot payload.",
        "type": "object",
        "properties": {
          "symbolCode": {
            "type": "string",
            "description": "The symbol code for the symbol.",
            "minimum": 1
          },
          "type": {
            "enum": ["point", "polygon", "lineString"],
            "description": "Defines the geojson format of the coordinates in the coordinate attribute."
          },
          "coordinates": {
              "type": "array",
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
          
        }
      }
    }
  }
};