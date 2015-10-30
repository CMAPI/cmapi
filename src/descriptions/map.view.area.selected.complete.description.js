cmapi.channel["map.view.area.selected.complete"] = cmapi.channel["map.view.area.selected.complete"] || {};
cmapi.channel["map.view.area.selected.complete"].description = {
  "description": "Message indicating the map.view.area.selected message has completed",
  "properties": {
    "bounds": {
      "description": "Bounding box of area selected on map",
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
    "button": {
      "description": "Which mouse button was clicked.  Allowable values are 'right', 'left', and 'middle'.  Default value is 'left'.",
      "defaultValue": ""
    },
    "keys": {
      "description": "An array of keys pressed during the click event.  Allowable values are 'alt', 'ctrl', 'shift', and 'none'. Default value is 'none'.",
      "defaultValue": ["none"]
    }
  }
};
