cmapi.channel["map.status.selected"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.selected",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string"
      },
      "selectedFeatures": {
        "type": "array",
        "items": {
          "description": "Individual selected feature object",
          "type": "object",
          "properties": {
            "featureId": {
              "type": "string",
              "description": "The ID of the feature that contains the selected object."
            },
            "selectedId": {
              "type": "string",
              "description": "The ID of the actual selected object (may be a sub-feature contained within the aggregate feature data with the given featureId)."
            },
            "selectedName": {
              "type": "string",
              "description": "The name of the selected object."
            }
          },
          "required": ["featureId"]
        }
      }
    },
    "required": ["overlayId", "selectedFeatures"]
  }
};
