cmapi.channel["map.view.center.location"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.location",
    "type": "object",
    "properties": {
      "location": {
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
      "zoom": {
        "type": ["string", "number"]
      }
    },
    "required": ["location"]
  }
};
