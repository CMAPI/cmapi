cmapi.channel["map.feature.plot.url"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot.url",
    "type": "object",
    "properties": {
      "featureId": {
        "type": "string"
      },
      "url": {
        "type": "string"
      },
      "overlayId": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "format": {
        "type": "string",
        "default": "kml"
      },
      "params": {
        "type": "object"
      },
      "zoom": {
        "type": "boolean",
        "default": false
      }
    },
    "required": ["featureId", "url"]
  }
};
