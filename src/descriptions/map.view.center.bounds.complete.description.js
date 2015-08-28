cmapi.channel["map.view.center.bounds.complete"].description = {
  "description": "map.complete.details object for the map.view.center.bounds.complete message",
  "properties": {
    "bounds": {
      "description": "Bounding box of area the map is centered at.",
      "default": " ",
      "properties": {
        "southWest": {
          "description": "Bottom right of the bounds",
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
        "northEast": {
          "description": "Top left of the bounds",
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
        }
      }
    },
    "zoom": {
      "description": "what level the map is zoomed to",
      "default": ""
    }
  }
};
