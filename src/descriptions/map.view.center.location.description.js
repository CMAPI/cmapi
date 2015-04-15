cmapi.channel["map.view.center.location"].description = {
  "description": "Center the map on a particular location. The map may also be zoomed as close as possible to the location or to a given range",
  "properties": {
    "location": {
      "description": "Location to be centered in map.",
      "default": "",
      "properties": {
        "lat": {
          "description": "The latitude value of the point",
          "default": ""
        },
        "lon": {
          "description": "The longitude value of the point",
          "default": ""
        }
      }
    },
    "zoom": {
      "description": "If auto, map will adjust to zoom as close as possible to the given location in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
      "default": ""
    }
  }
};
