cmapi.channel["map.status.format"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.format",
    "type": "object",
    "properties": {
      "formats": {
        "type": "array",
        "uniqueItems": true,
        "default": ["kml"],
        "items": {
          "anyOf": ["kml", "geojson", "wms"]
        }
      }
    },
    "required": ["formats"]
  }
};
