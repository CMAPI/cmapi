cmapi.channel["map.feature.unplot.batch.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "type": "object",
    "properties": {
      "features": {
        "type": "array",
        "properties": {
          "overlayId": {
            "type": "string"
          },
          "featureId": {
            "type": "string"
          }
        },
        "required": ["featureId", "overlayId"]
      }
    },
    "required": ["features"]
  }
};
