cmapi.channel["map.view.center.bounds.complete"] = cmapi.channel["map.view.center.bounds.complete"] || {};
cmapi.channel["map.view.center.bounds.complete"].description = {
  "description": "map.complete.details object for the map.view.center.bounds.complete message",
  "properties": {
    "bounds": {
      "description": "Bounding box of area the map is centered at.",
      "defaultValue": " ",
      "properties": {
        "southWest": {
          "description": "Bottom right of the bounds",
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
          "description": "Top left of the bounds",
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
      "description": "what level the map is zoomed to",
      "defaultValue": ""
    }
  }
};
