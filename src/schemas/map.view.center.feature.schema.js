cmapi.channel["map.view.center.feature"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.feature",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string"
      },
      "featureId": {
        "type": "string"
      },
      "zoom": {
        "type": ["string", "number"]
      }
    },
    "required": ["featureId"]
  }
};
