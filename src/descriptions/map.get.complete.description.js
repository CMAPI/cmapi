cmapi.channel["map.get.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.get",
  "properties": {
      "successes": {
        "description": "An object containing successful results (features and overlays) pertaining to the filter parameters provided in the corresponding map.get message",
        "properties" : {
          "overlay":{
            "description" : "An array of overlay objects (see map.overlay.create) that meet the map.get fillter criteria"
          },
          "feature":{
            "description" : "An array of feature objects (see map.feature.plot) that meet the map.get fillter criteria"
          }
        }
      }
  }
};
