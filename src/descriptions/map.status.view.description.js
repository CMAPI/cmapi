cmapi.channel["map.status.view"].description = {
  "description": "Send out the current status of the map view",
  "properties": {
    "bounds": {
      "description": "Bounding box of area visible on map.",
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
    "center": {
      "description": "The current center of the map",
      "defaultValue": " ",
      "properties": {
        "lat": {
          "description": "The latitude of the location that was clicked",
          "defaultValue": ""
        },
        "lon": {
          "description": "The longitude of the location that was clicked",
          "defaultValue": ""
        }
      }
    },
    "range": {
      "description": "The current distance, in meters, map is zoomed out",
      "defaultValue": ""
    },
    "requester": {
      "description": "ID of client that requested this status message be sent (if any).  If no requester, message is being sent due to a map view change",
      "defaultValue": ""
    }
  }
};
