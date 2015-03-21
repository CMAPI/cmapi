cmapi.channel["map.menu.create"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.create",
    "description": "Creates a context menu and registers it with the map so that when the user right clicks on the map (or feature or overlay) the registered menu items will appear.  This allows for multiple widgets to register contextMenu items.  The menuId is used to establish what widget(s) will handle the action of a given menu item click.",
    "properties": {
      "name": {
        "description": "The name of the menu. If not included, the menuId is used as the name. Note that menu names do not have to be unique and are intended for display purposes only.",
        "type": "string",
        "default": "value passed in menuId param"
      },
      "menuId": {
        "description": "A globally unique ID that is used both to identify the menu, and as a handle for the widget which originally registered the menu so it can identify which map.menu.clicked events it should respond to.",
        "type": "string"
      },
      "menuType": {
        "description": "A value indicating the scope of the menu being registered.  The options are:<ol><li>mapglobal -  Menu is applicable to the entire map.  The menu items will show in a aggregate list of all mapglogal menus when the map is right-clicked</li><li>overlayglobal - Menu will appear when any overlay is right-clicked</li><li>featureglobal - Menu will appear when any features is right-clicked</li><li>objectinstance - Menu will only appear when a particular overlay or feature is right-clicked, and requires an additional registration step for the menu to be 'activated' (e.g., map.feature.update or map.overlay.update)</li><li>submenu - Menu is to be used as a sub menu to another menu.</li></ol>",
        "enum": ['mapglobal',
          'overlayglobal',
          'featureglobal',
          'objectinstance',
          'submenu'
        ]
      },
      "menuItems": {
        "description": "An array of menu items.  These items will become the elements of the menu (i.e., will show up in an ordered list when the appropriate map element is right clicked)",
        "type": "array",
            "properties": {
                "menuItemId": {
                  "type": "string",
                  "description": "Unique ID used to correlate a map.menu.clicked message with this particular menu item.  This ID must only be unique within this menu"
                },
                "label": {
                  "type": "string",
                  "description": "The visible label assigned to this item in the context menu"
                },
                "iconUrl": {
                  "type": "string",
                  "description": "A URL to a specific icon that MAY be displayed next to the item in the context menu"
                },
            },
        "required": ["menuItemId", "label"]
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string"
      },

    },
    "required": ["menuId", "menuItems"]
  },
  "notes": ["Widget developer creates a context menu object",
    "Context menus can be created and registered either at run-time via the map.menu.create channel, OR via manual configuration of the map",
    "If the scope of the menu is 'objectinstance' then the developer SHOULD assign the id of the created menu to specific feature instances via the map.feature.plot, map.feature.plot.url, map.feature.plot.batch or map.feature.update channels and/or to the specific overlay instances via the map.overlay.create or map.overlay.update channels",
    "When the user right clicks on the map, an overlay or a feature (or the overlay/feature listing in a tree type component), the appropriately registered context menu MUST appear and it's associated menuItems MUST all be selectable by the user.",
    "When the user selects a menu item, the map MUST send a map.menu.clicked event with the appropriately registered menuId and menuItemId so that the widget that created the context menu can take action on the event"
  ]

};
