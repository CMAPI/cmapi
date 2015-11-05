cmapi.channel["map.status.format"].description = {
  "description": "Send out the list of data formats that the map widget supports; in other words, this map implementation supports the following feature data formats.",
  "properties": {
    "formats": {
      "description": "An array of the formats that this map supports. Note that for this version of the Common Map Widget API, all map implementations MUST support 'kml', 'geojson' and 'wms'.  Additional map formats MAY be supported.",
      "defaultValue": ["kml"],
	  "allowableValues" : "kml, geojson, wms"
    }
  }
};
