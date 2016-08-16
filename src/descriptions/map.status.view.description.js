cmapi.channel["map.status.view"].description = {
  "description": "Send out the current status of the map view",
  "properties": {
    "bounds": {
      "description": "Bounding box of area visible on map.",
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
    "center": {
      "description": "The current center of the map",
      "defaultValue": "",
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
      "description": "The distance in meters from the map.  For a 2D map this may be translated to the closest zoom level.  For a 3D map it should be interpreted as the camera's distance in meters from the center of the map - which is essentially the camera's altitude when looking straight down.",
      "defaultValue": ""
    },
    "requester": {
      "description": "ID of client that requested this status message be sent (if any).  If no requester, message is being sent due to a map view change",
      "defaultValue": ""
    },
    "time": {
      "description": "The current center of the map",
      "defaultValue": "",
      "properties": {
        "timeSpan": {
          "description": "An single timespan object with a begin dateTime and end dateTime property representing the span of time the map visualization is filtering",
          "defaultValue": ""
        },
        "timeSpans": {
          "description": "An array of timespan objects with a begin dateTime and end dateTime property representing the spans of time the map visualization is filtering",
          "defaultValue": ""
        },
        "timeStamp": {
          "description": "A point in time representing the map being in a filter mode with a specific point in time set",
          "defaultValue": ""
        }
      }
    }
  }
};
