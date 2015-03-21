cmapi.channel["map.view.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.view.zoom, map.view.center.*.",
    "type": "object",
    "properties": {
      "bounds": {
        "description": "The bounds coordinates of the maps viewing area.",
        "type": "object",
        "properties": {
          "northEast": {
            "description": "The coordinates of the north east corner of the maps viewing area.",
            "type": "object",
            "properties": {
              "lat": {
                "description": "The latitude of the most northen section of the viewing area. A value between -90 and 90.",
                "type": "number"
              },
              "lon": {
                "description": "The longitude of the most easternly section of the viewing area. A value between -180 and 180.",
                "type": "number"
              }
            },
            "required": ["lat", "lon"]
          },
          "southWest": {
            "description": "The coordinates of the south west corner of the maps viewing area.",
            "type": "object",
            "properties": {
              "lat": {
                "description": "The latitude of the most southern section of the viewing area. A value between -90 and 90.",
                "type": "number"
              },
              "lon": {
                "description": "The longitude of the most westernly section of the viewing area. A value between -180 and 180.",
                "type": "number"
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["northEast", "southWest"]
      },
      "range": {
        "description": "The altitude of the maps view point",
        "type": "number"
      },
      "center": {
        "description": "The center coordinate of the maps viewing area.",
        "type": "object",
        "properties": {
          "lat": {
            "description": "The latitude of the center of the viewing area. A value between -90 and 90.",
            "type": "number"
          },
          "lon": {
            "description": "The longitude of the center of the viewing area. A value between -180 and 180.",
            "type": "number"
          }
        },
        "required": ["lat", "lon"]
      }
    },
    "required": ["bounds", "range", "center"]
  }
};
