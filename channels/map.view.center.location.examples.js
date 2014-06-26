cmapi.channel["map.view.center.location"].examples = [
    {
        "title": "Center on a location and zoom",
        "description": "Center the map on a particular location and zoom to range of 1000",
        "valid": true,
        "payload": {
          "location": {
            "lat": 38.8708, 
            "lon": -77.0558
          }, 
            "zoom": 1000
          }
    },
    {
        "title": "Center on a location and do not zoom",
        "description": "Center the map on a particular location and do not zoom",
        "valid": true,
        "payload": {
          "location": {
            "lat": 38.8708, 
            "lon": -77.0558
          }, 
            "zoom": false
          }
    },
    {
        "title": "Center on an invalid location",
        "description": "Center the map on a particular overlay",
        "valid": false,
        "payload": {
          "location": {
            "lat": 38.8708, 
            "lon": -777.0558
          }, 
            "zoom": false
          }
    }
]



