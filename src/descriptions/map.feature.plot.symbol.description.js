cmapi.channel["map.feature.plot.symbol"].description = {
  "description": "This optional extension defines the format of the map.feature.plot channel payload for symbols. The feature attibute below defines the format and content of the features attibute of the map.feature.plot. The properties.modifiers attribute defines the modifiers that the map implementation shall apply to the feature. This schema provides a general framework for different symbology standards such as MIL-STD-2525 and NATO APP-6",
  "properties": {
    "feature": {
      "description": "The feature attribute of the map.feature.plot payload.",
      "defaultValue": "",
      "properties": {
        "symbolCode": {
          "description": "The symbol code for the symbol.",
          "defaultValue": ""
        },
        "type": {
          "description": "Defines the geojson format of the coordinates in the coordinate attribute.",
          "defaultValue": ""
        },
        "coordinates": {
          "description": "This attribute MUST contain a valid geojson coordinate structure for the type indicated in the type attribute. See http://geojson.org/geojson-spec.html for the valid format.",
          "defaultValue": ""
        }
      }
    },
    "properties": {
      "description": "The properties attribute of the map.feature.plot payload. Which in addition to other attributes that may be present, it must contain the following attribute.",
      "defaultValue": "",
      "properties": {}
    }
  }
};
