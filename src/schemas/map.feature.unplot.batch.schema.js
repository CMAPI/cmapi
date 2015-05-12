cmapi.channel["map.feature.unplot.batch"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.unplot.batch",
    "type": "object",
    "properties": {
      "features": {
        "type": "array"
      },
      "overlayId": {
        "type": "string",
        "default": ""
      }
    },
    "required": ["features"]
  }
};
