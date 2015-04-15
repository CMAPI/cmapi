cmapi.channel["map.view.center.bounds"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.bounds",
    "type": "object",
    "properties": {
      "bounds": {
        "type": "object",
        "default": " ",
        "properties": {
          "southWest": {
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "minimum": -90,
                "maximum": 90
              },
              "lon": {
                "type": "number",
                "minimum": -180,
                "maximum": 180
              }
            },
            "required": ["lat", "lon"]
          },
          "northEast": {
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "minimum": -90,
                "maximum": 90
              },
              "lon": {
                "type": "number",
                "minimum": -180,
                "maximum": 180
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["southWest", "northEast"]
      },
      "zoom": {
        "type": ["string", "number"]
      }
    },
    "required": ["bounds"]
  }
};
