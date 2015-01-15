cmapi.channel["map.view.center.bounds"].examples = [
  {
    "title": "Center on bounds",
    "description": "",
    "valid": true,
    "payload": {
      "bounds": {
        "southWest": {
          "lat": 24.5,
          "lon": -124
        },
        "northEast": {
          "lat": 50.5,
          "lon": -79
        }
      },
      "zoom": 3000000
    }
  },
  {
    "title": "Invalid center on bounds",
    "description": "",
    "valid": false,
    "payload": {
      "zoom": 3000000
    }
  },
  {
    "title": "Invalid center on bounds",
    "description": "",
    "valid": false,
    "payload": {
      "bounds": {
        "southWest": {
          "lat": 24.5,
          "lon": -8124
        },
        "northEast": {
          "lat": 50.5,
          "lon": -79
        }
      },
      "zoom": 3000000
    }
  }
];