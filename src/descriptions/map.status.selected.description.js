cmapi.channel["map.status.selected"].description = {
  "description": "Send out the list of currently selected features.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay which contains the selected objects.   If the list of selected objects spans multiple overlays, then the payload will be an array of messages – one message for each overlay that contains selected objects.",
      "defaultValue": ""
    },
    "selectedFeatures": {
      "description": "An array of features from the identified overlay that are currently selected.",
      "defaultValue": ""
    }
  }
};
