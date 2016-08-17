cmapi.channel["map.feature.plot.batch"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot.batch",
    "type": "object",
    "properties": {
      "features": {
        "type": "array"
      },
      "overlayId": {
        "type": "string"
      },
      "format": {
        "type": "string"
      },
      "zoom": {
        "type": "boolean"
      },
      "readOnly": {
        "type": "boolean"
      }
    },
    "required": ["features","format"]
  }
};
