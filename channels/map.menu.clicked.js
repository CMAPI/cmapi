cmapi.channel["map.menu.clicked"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.clicked",
    "description": "Called by the map after a context menu item is clicked to notify the widget which registered the context menu to take action.",
    "properties": {
      "menuId": {
        "description": "The unique ID of the menu.  This ID can be used to associate a menu with a feature in a map.feature.plot message.",
        "type": "string"
      },
      "menuItemId": {
        "type": "string",
        "description": "Unique ID used to correlate a map.menu.clicked message with this particluar menu item.  This ID MUST only be unique within this menu"
      },
      "overlayId": {
        "description": "The ID of the overlay the clicked feature is on if the menu was a feature context menu or an overlay context menu",
        "type": "string",
        "default": "sending widget's ID"
      },
      "featureId": {
        "description": "The ID of the clicked feature if the menu is a feature menu",
        "type": "string"
      },
      "lat": {
        "description": "The latitude coordinate is degrees decimal of where the click took place on the map",
        "type": "number",
        "minimum": -90,
        "maximum": 90
      },
      "lon": {
        "description": "The longitude coordinate is degrees decimal of where the click took place on the map",
        "type": "number",
        "minimum": -180,
        "maximum": 180
      },
      "x": {
        "description": "The pixel coordinate on the x axis relative to the top left corner of the map",
        "type": "number",
        "minimum": 0
      },
      "y": {
        "description": "The pixel coordinate on the y axis relative to the top left corner of the map",
        "type": "number",
        "minimum": 0
      },
      "elevation": {
        "description": "The elevation of the location clicked in meters if terrain elevation data is available",
        "type": "number"
      }

    },
    "required": ["menuId", "menuItemId"]
  },
  "notes": ["When the user right clicks on a map feature that has a menu registered with it, or the feature listing in a tree type component, , the registered context menu and with the applicable context items appear.",
    "When the user right clicks on the map and it has a menu registered with it, the registered context menu and with the applicable context items appear.",
    "When user selects a menu item, an event is sent back to the widget that created the context menu and can take action on the event"
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]

};
