cmapi.channel["map.status.view"].examples = [{
  "title": "Send view status with all properties",
  "description": "",
  "valid": true,
  "payload": {
    "requester": "217c086f-719f-928f-5e75-972530cf0db6",
    "bounds": {
      "southWest": {
        "lat": 39.46164364205549,
        "lon": -75.6134033203125
      },
      "northEast": {
        "lat": 40.97575093157534,
        "lon": -73.10302734375
      }
    },
    "center": {
      "lat": 40.2205,
      "lon": -74.3579
    },
    "range": 137500
  }
}, {
  "title": "Send view status with no requestor",
  "description": "Valid with no requestor",
  "valid": true,
  "payload": {
    "bounds": {
      "southWest": {
        "lat": 39.46164364205549,
        "lon": -75.6134033203125
      },
      "northEast": {
        "lat": 40.97575093157534,
        "lon": -73.10302734375
      }
    },
    "center": {
      "lat": 40.2205,
      "lon": -74.3579
    },
    "range": 137500
  }
}, {
  "title": "Send view status with no bounds",
  "description": "",
  "valid": false,
  "payload": {
    "center": {
      "lat": 40.2205,
      "lon": -74.3579
    },
    "range": 137500
  }
}, {
  "title": "Send view status with no center",
  "description": "invalid with no center",
  "valid": false,
  "payload": {
    "bounds": {
      "southWest": {
        "lat": 39.46164364205549,
        "lon": -75.6134033203125
      },
      "northEast": {
        "lat": 40.97575093157534,
        "lon": -73.10302734375
      }
    },
    "range": 137500
  }
}, {
  "title": "Send view status with no range",
  "description": "invalid with no nage",
  "valid": false,
  "payload": {
    "bounds": {
      "southWest": {
        "lat": 39.46164364205549,
        "lon": -75.6134033203125
      },
      "northEast": {
        "lat": 40.97575093157534,
        "lon": -73.10302734375
      }
    },
    "center": {
      "lat": 40.2205,
      "lon": -74.3579
    }
  }
}]
