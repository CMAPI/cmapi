cmapi.channel["map.feature.plot.symbol"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.symbol",
    "type": "object",
    "required": ["feature"],
    "properties": {
      "feature": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "feature",
        "type": "object",
        "properties": {
          "symbolCode": {
            "type": "string",
            "minimum": 1
          },
          "type": {
            "enum": ["point", "polygon", "lineString"]
          },
          "coordinates": {
            "type": "array"
          }
        },
        "required": ["symbolCode", "type", "coordinates"]
      },
      "properties": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "properties",
        "type": "object",
        "properties": {}
      }
    }
  }
};
