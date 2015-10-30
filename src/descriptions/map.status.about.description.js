cmapi.channel["map.status.about"].description = {
  "description": "Send out static information about the map implementation",
  "properties": {
    "version": {
      "description": "A comma delimited list of the version numbers of the Common Map Widget API that this map widget supports.",
      "defaultValue": " "
    },
    "type": {
      "description": "The type of map in the map widget.  Allowable values are 2-D, 3-D, or other.",
      "defaultValue": " "
    },
    "widgetName": {
      "description": "The registered name of the map widget which is consistent across all version of OWF and cannot change during a user's session. ",
      "defaultValue": " "
    },
    "instanceName": {
      "description": "The name of the widget on the users dashboard.  This name can be changed by the end user and by the widget developer in code so this name may change during a user's session.  ",
      "defaultValue": "N/A"
    },
    "universalName": {
      "description": "The universal name of the map widget set in the widget registration.  This is not available in all versions of OWF.",
      "defaultValue": "N/A"
    },
    "extensions": {
      "description": "An array of optional extensions that the widget supports.  Allowable values are intents, clustering, and userManipulation.  If no extensions are supported, then an empty array SHALL be sent.",
      "defaultValue": "N/A"
    }
  }
};
