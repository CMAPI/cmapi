cmapi.channel["map.status.format"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.format",
    "description": "Send out the list of data formats that the map widget supports; in other words, this map implementation supports the following feature data formats.",
    "type": "object",
    "properties": {
      "formats": {
        "description": "An array of the formats that this map supports. Note that for this version of the Common Map Widget API, all map implementations MUST support 'kml', 'geojson' and 'wms'.  Additional map formats MAY be supported.",
        "type": "array",
        "uniqueItems": true,
        "default": ["kml"],
        "items": {
          "anyOf": ["kml", "geojson", "wms"]
        }
      },
      "messageId": {
        "description": "This ID that SHALL match the ID provided in the map.status.request message.",
        "type": "string",
        "status": "new",
        "extension": "User Manipulation - Context Menus"
      }
    },
    "required": ["formats"]
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added optional messageId parameter to support user manipulation extension"
  }]
};
