cmapi.channel["map.view.center.overlay"].description = {
  "description": "Center the map on a particular overlay. The map may also be zoomed to show the entire overlay (if possible) or to show a given range",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay to center on. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    },
    "zoom": {
      "description": "Attribute that defines the zoom behaviour of the map. If auto, zoom will adjust to best fit the overlay in the user's viewable area.  If a number, map will zoom to specified range in meters.  If no zoom attribute is included, no zoom is performed.",
      "defaultValue": ""
    }
  }
};
