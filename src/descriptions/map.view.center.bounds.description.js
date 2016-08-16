cmapi.channel["map.view.center.bounds"].description = {
  "description": "Center the map on a particular bounding box. The map may also be zoomed to show the entire bounds (if possible) or to show a given range.",
  "properties": {
    "bounds": {
      "description": "Bounding box of area to be centered in map.",
      "defaultValue": "",
      "properties": {
        "southWest": {
          "description": "Southwestern corner of the bounds",
          "defaultValue": "",
          "properties": {
            "lat": {
              "description": "The latitude value of the point",
              "defaultValue": ""
            },
            "lon": {
              "description": "The longitude value of the point",
              "defaultValue": ""
            }
          }
        },
        "northEast": {
          "description": "Northeastern corner of the bounds",
          "defaultValue": "",
          "properties": {
            "lat": {
              "description": "The latitude value of the point",
              "defaultValue": ""
            },
            "lon": {
              "description": "The longitude value of the point",
              "defaultValue": ""
            }
          }
        }
      }
    },
    "zoom": {
      "description": "Attribute that defines the zoom behaviour of the map. If auto, map will adjust to zoom as close as possible to the given location in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
      "defaultValue": ""
    }
  }
};
