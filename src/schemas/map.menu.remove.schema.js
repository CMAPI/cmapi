cmapi.channel["map.menu.remove"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.remove",
    "description": "Removes a context menu and any child menus associated with this context menu.  ",
    "properties": {
      "menuId": {
        "description": "The unique ID of the menu that the user selected.  MUST be the menuId that was assigned when the menu was registered.",
        "type": "string"
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string"
      }
    },
    "required": ["menuId"]
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]

};
