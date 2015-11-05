cmapi.channel["map.view.center.feature.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
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
    "required": ["overlayId", "featureId", "zoom"]
  }
};
