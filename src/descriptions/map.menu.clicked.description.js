cmapi.channel["map.menu.clicked"].description = {
  "description": "Called by the map after a context menu item is clicked to notify the widget which registered the context menu to take action.",
  "properties": {
    "menuId": {
      "description": "The unique ID of the menu that the user selected.  MUST be the menuId that was assigned when the menu was registered.",
      "defaultValue": ""
    },
    "menuItemId": {
      "description": "The unique ID of the specific menu item that the user selected.  MUST be the menuItemId that was assigned when the menu was registered.",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The ID of the overlay, or the overlay containing the feature, that was right-clicked to bring up the context menu.  SHOULD be populated if the context menu was an 'objectinstance' scoped context menu",
      "defaultValue": "N/A"
    },
    "featureId": {
      "description": "The ID of the feature that was right-clicked to bring up the context menu.  SHOULD be populated if the context menu was an 'objectinstance' scoped context menu",
      "defaultValue": ""
    },
    "lat": {
      "description": "The latitude coordinate in degrees decimal identifying where the right-click took place on the map",
      "defaultValue": ""
    },
    "lon": {
      "description": "The longitude coordinate in degrees decimal of where the right-click took place on the map",
      "defaultValue": ""
    },
    "x": {
      "description": "The pixel coordinate on the x axis where the right-click took place on the map, relative to the top left corner of the map",
      "defaultValue": ""
    },
    "y": {
      "description": "The pixel coordinate on the y axis where the right-click took place on the map, relative to the top left corner of the map",
      "defaultValue": ""
    },
    "elevation": {
      "description": "The elevation in meters of the location that was right-clicked, if terrain elevation data is available",
      "defaultValue": ""
    }
  }
};
