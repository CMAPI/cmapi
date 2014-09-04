cmapi.channel["map.menu.create"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.create",
    "description": "Creates a context menu and registers it with the map.  When the user right clicks on the map, the menu items will appear.  This allows for multiple widgets to register similarly named contextMenu items, but listed in the context of the widget(s) that will handle the action of the menu item click.  If mapMenu is false, the menu is a feature menu, and will appear only when it has been registered during a feature.plot call.",
    "properties": {
      "name": {
        "description": "The name of the overlay. If not included, the ID is used as the name. Note that overlay names do not have to be unique and are intended for display purposes only.",
        "type": "string",
        "default": "N/A"
      },
      "menuId": {
        "description": "The unique ID of the menu.  This ID can be used to associate a menu with a feature in a map.feature.plot message.",
        "type": "string"
      },
      "menuType": {
        "description": "A value indicating the type of the menu.  The options are:<ol><li>mapglobal -  Menu with items applicable to the map.  These items will show in a cumulative list of all map menus / menuItems when the map is right-clicked</li><li>overlayglobal - Menu with items applicable to all overlays</li><li>featureglobal - Menu with items applicable to all features</li><li>submenu - Menu that is used as a sub menu to another menu.</li></ol>",
        "enum": ['mapglobal',
          'overlayglobal',
          'featureglobal',
          'objectinstance',
          'submenu'
        ]
      },
      "menuItems": {
        "description": "This is an array of menu items.",
        "type": "array",
        "items":{
            "type":"object",
            "properties": {
                "menuItemId": {
                  "type": "string",
                  "description": "Unique ID used to correlate a map.menu.clicked message with this particluar menu item.  This ID MUST only be unique within this menu"
                },
                "label": {
                  "type": "string",
                  "description": "The visible label assigned to an item in the context menu"
                },
                "iconUrl": {
                  "type": "string",
                  "description": "A URL to a specific icon that MAY be displayed next to the item in the context menu"
                }
            },
            "additionalItems": true
        },
        "required": ["menuItemId", "label"]
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string"
      },

    },
    "required": ["menuId", "menuItems"]
  },
  "notes": ["Widget developer create a context menu object",
    "Widget developer registers the context menu with the map defining if it is a map menu or a feature menu",
    "Developer assigns the id of the created menu to a feature in the map.feature.plot channel",
    "When the user right clicks on a map feature that has a menu registered with it, or the feature listing in a tree type component, , the registered context menu and with the applicable context items appear.",
    "When the user right clicks on the map and it has a menu registered with it, the registered context menu and with the applicable context items appear.",
    "When user selects a menu item, an event is sent back to the widget that created the context menu and can take action on the event"
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]

};
