cmapi.channel["map.menu.clicked"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.clicked",
    "description": "Called by the map after a context menu item is clicked to notify the widget which registered the context menu to take action.",
    "properties": {
      "menuId": {
        "description": "The unique ID of the menu that the user selected.  MUST be the menuId that was assigned when the menu was registered.",
        "type": "string"
      },
      "menuItemId": {
        "type": "string",
        "description": "The unique ID of the specific menu item that the user selected.  MUST be the menuItemId that was assigned when the menu was registered."
      },
      "overlayId": {
        "description": "The ID of the overlay, or the overlay containing the feature, that was right-clicked to bring up the context menu.  SHOULD be populated if the context menu was an 'objectinstance' scoped context menu",
        "type": "string",
        "default": "N/A"
      },
      "featureId": {
        "description": "The ID of the feature that was right-clicked to bring up the context menu.  SHOULD be populated if the context menu was an 'objectinstance' scoped context menu",
        "type": "string"
      },
      "lat": {
        "description": "The latitude coordinate in degrees decimal identifying where the right-click took place on the map",
        "type": "number",
        "minimum": -90,
        "maximum": 90
      },
      "lon": {
        "description": "The longitude coordinate in degrees decimal of where the right-click took place on the map",
        "type": "number",
        "minimum": -180,
        "maximum": 180
      },
      "x": {
        "description": "The pixel coordinate on the x axis where the right-click took place on the map, relative to the top left corner of the map",
        "type": "number",
        "minimum": 0
      },
      "y": {
        "description": "The pixel coordinate on the y axis where the right-click took place on the map, relative to the top left corner of the map",
        "type": "number",
        "minimum": 0
      },
      "elevation": {
        "description": "The elevation in meters of the location that was right-clicked, if terrain elevation data is available",
        "type": "number"
      }

    },
    "required": ["menuId", "menuItemId"]
  },
  "notes": ["When the user selects a context menu item, the map MUST send a map.menu.clicked event with the appropriately registered menuId and menuItemId so that the widget that created the context menu can take action on the event"
  ]

};
