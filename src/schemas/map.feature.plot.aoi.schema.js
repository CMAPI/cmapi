cmapi.channel["map.feature.plot.aoi"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.aoi",
    "type": "object",
    "required": ["aoi"],
    "properties": {
      "aoi": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "aoi",
        "type": "object",
        "properties": {
          "buffer": {
            "type": "number",
            "minimum": 1
          },
          "type": {
            "type": "string",
            "enum": ["bbox", "polygon", "line", "point-radius"]
          }
        },
        "required": ["type"]
      }
    }
  }
};
