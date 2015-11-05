cmapi.channel["map.view.center.location.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
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
    "required": ["location", "zoom"]
  }
};
