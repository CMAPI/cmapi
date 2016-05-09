cmapi.channel["map.status.format"].description = {
  "description": "Send out the list of data formats that the map widget supports; in other words, this map implementation supports the following feature data formats.  CMAPI allows any map implementation to provide additional formats in addition to what CMAPI defines.  CMAPI Core requires KML, GeoJSON, and WMS. CMAPI provides documented optional extensions such as MIL-STD-2525 symbols.  The definitions of those extensions also define the specific string to be included in the returned format array if these additional formats are supported.  Formats not specified in CMAPI can also be added to the formats array allowing extensions for your specific implementation.",
  "properties": {
    "formats": {
      "description": "An array of the formats that this map supports. Note that for this version of the Common Map Widget API, all map implementations MUST support 'kml', 'geojson' and 'wms'.  Additional map formats MAY be supported.",
      "defaultValue": ["kml"],
	  "allowableValues" : "kml, geojson, wms"
    }
  }
};
