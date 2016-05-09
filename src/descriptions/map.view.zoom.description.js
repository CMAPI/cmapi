cmapi.channel["map.view.zoom"].description = {
  "description": "Zoom the map to a particular range",
  "properties": {
    "range": {
      "description": "The distance in meters from the map.  For a 2D map this may be translated to the closest zoom level.  For a 3D map it should be interpreted as the camera's distance in meters from the center of the map - which is essentially the camera's altitude when looking straight down.",
      "defaultValue": ""
    }
  }
};
