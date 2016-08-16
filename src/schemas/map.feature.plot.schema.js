cmapi.channel["map.feature.plot"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string"
      },
      "featureId": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "format": {
        "type": "string",
        "enum": ["kml","geojson"],
        "default": "kml"
      },
      "feature": {
        "type": ["object", "string"],
        "additionalProperties": true
      },
      "zoom": {
        "type": "boolean",
        "default": false
      },
      "readOnly": {
        "type": "boolean",
        "default": true
      },
      "properties": {
        "additionalProperties": true,
        "type": "object"
      }
    },
    "required": ["featureId", "feature"]
  }
};
