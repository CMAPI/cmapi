cmapi.channel["map.status.about"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.about",
    "description": "Send out static information about the map implementation",
    "type": "object",
    "properties": {
      "version": {
        "type": "string",
        "description": "The version numbers of the Common Map Widget API that this map widget supports."
      },
      "type": {
        "enum": ["2-D", "3-D", "other"],
        "description": "The type of map in the map widget.  Allowable values are “2-D,” “3-D,” or “other.”"
      },
      "widgetName": {
        "type": "string",
        "description": "The registered name of the map widget which is consistent across all version of OWF and cannot change during a user’s session. "
      },
      "instanceName": {
        "type": "string",
        "description": "The name of the widget on the users dashboard.  This name can be changed by the user and in code so this name may change during a user’s session.  "
      },
      "universalName": {
        "type": "string",
        "description": "The universal name of the map widget set in the widget registration.  This is not available in all versions of OWF."
      },
      "extensions": {
        "type": "array",
        "description": "An array of optional extensions that the widget supports.  Allowable values are “intents”, “clustering”, and “userManipulation”.  If no extensions are supported, then an empty array SHALL be sent."
      }
    },
    "required": ["version", "type", "widgetName", "extensions"]
  },
  "notes": []
};