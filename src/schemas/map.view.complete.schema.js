cmapi.channel["map.view.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "type": "object",
    "properties": {
      "bounds": {
        "type": "object",
        "properties": {
          "northEast": {
            "type": "object",
            "properties": {
              "lat": {
                "type": "number"
              },
              "lon": {
                "type": "number"
              }
            },
            "required": ["lat", "lon"]
          },
          "southWest": {
            "type": "object",
            "properties": {
              "lat": {
                "type": "number"
              },
              "lon": {
                "type": "number"
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["northEast", "southWest"]
      },
      "range": {
        "type": "number"
      },
      "center": {
        "type": "object",
        "properties": {
          "lat": {
            "type": "number"
          },
          "lon": {
            "type": "number"
          }
        },
        "required": ["lat", "lon"]
      }
    },
    "required": ["bounds", "range", "center"]
  }
};
