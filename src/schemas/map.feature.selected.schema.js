cmapi.channel["map.feature.selected"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.selected",
    "properties": {
      "selectedId": {
        "type": "string"
      },
      "selectedName": {
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
