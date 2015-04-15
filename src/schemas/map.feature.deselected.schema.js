cmapi.channel["map.feature.deselected"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.deselected",
    "properties": {
      "deSelectedId": {
        "type": "string"
      },
      "deSelectedName": {
        "type": "string"
      },
      "featureId": {
        "type": "string"
      },
      "overlayId": {
        "type": "string"
      }
    },
    "required": ["featureId"]
  }
};
