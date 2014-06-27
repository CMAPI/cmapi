cmapi.channel["map.status.format"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.format",
    "description": "Send out the list of data formats that the map widget supports; in other words, this map implementation supports the following feature formats.",
    "type": "object",
    "properties": {
      "formats": {
        "description": "An array of the formats that this map supports. Note that for this version of the Common Map Widget API, all map implementations MUST support KML, GeoJSON and WMS.  Additional map formats MAY be supported.",
        "type": "array",
        "uniqueItems": true,
        "default": ["kml"],
        "items": {
          "multipleOf": ["kml", "geojson", "wms"]
        }
      }
    },
    "required": ["formats"]
  },
  "notes": []
};