cmapi.channel["map.feature.plot.url"].description = {
  "description": "Have the map plot feature data from a Uniform Resource Locator (URL).",
  "properties": {
    "featureId": {
      "description": "Unique identifier for the given feature data. Note that feature ids must be unique within a given overlay. Reusing a feature id will be considered a reload with the original feature data being removed and replaced by the new feature data.",
      "default": ""
    },
    "url": {
      "description": "URL from which to retrieve the feature data to load onto the map",
      "default": ""
    },
    "overlayId": {
      "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, new feature is merged into existing overlay; otherwise, a new overlay will be created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If overlay exists, it will retain its status (whether visible or hidden). If overlay is created, it will be made visible.",
      "default": ""
    },
    "name": {
      "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
      "default": ""
    },
    "format": {
      "description": "Data format of the given feature. If no format is specified, the format defaults to kml. A list of formats supported by a particular map implementation can be obtained by querying the map using the map.status channel (see map.status). Note that for this version of the Common Map Widget API, all map implementations MUST support KML, GeoJSON, and WMS (GetMap only).",
      "default": "kml"
    },
    "params": {
      "description": "A JSON object containing a list of parameters to be passed to the server along with the URL when loading WMS data. Params object is ignored unless format is set to wms.  Note that request, exceptions, SRS/CRS, width, height, and bbox params should not be passed in as they are determined by the map as needed and will be ignored if passed. Params as passed will be concatenated to the URL and are expected to follow the WMS specification.   All parameters passed in must not be URL encoded (the map widget implementation will URL encode all passed in params).",
      "default": ""
    },
    "zoom": {
      "description": "true if map should zoom to newly loaded feature data, false if not. Default is false.  Ignored when loading WMS data.",
      "default": false
    }
  }
};
