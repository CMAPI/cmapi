cmapi.channel["map.feature.show"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.show",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string"
      },
      "featureId": {
        "type": "string"
      },
      "zoom": {
        "type": "boolean",
        "default": false
      }
    },
    "required": ["featureId"]
  }
};
