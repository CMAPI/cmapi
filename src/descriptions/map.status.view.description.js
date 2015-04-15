cmapi.channel["map.status.view"].description = {
  "description": "Send out the current status of the map view",
  "properties": {
    "bounds": {
      "description": "Bounding box of area visible on map.",
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
    "center": {
      "description": "The current center of the map",
      "default": " ",
      "properties": {
        "lat": {
          "description": "The latitude of the location that was clicked",
          "default": ""
        },
        "lon": {
          "description": "The longitude of the location that was clicked",
          "default": ""
        }
      }
    },
    "range": {
      "description": "The current distance, in meters, map is zoomed out",
      "default": ""
    },
    "requester": {
      "description": "ID of client that requested this status message be sent (if any).  If no requester, message is being sent due to a map view change",
      "default": ""
    }
  }
};
