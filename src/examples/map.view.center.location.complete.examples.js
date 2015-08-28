cmapi.channel["map.view.center.location.complete"].examples = [{
  "title": "map.message.complete details object for map.view.center.location message",
  "description": "Map centered on a particular location and zoomed to range of 1000",
  "valid": true,
  "payload": {
    "location": {
      "lat": 38.8708,
      "lon": -77.0558
    },
    "zoom": 1000
  }
}, {
  "title": "Map centered on a location and not zoomed",
  "description": "Center the map on a particular location and do not zoom",
  "valid": true,
  "payload": {
    "location": {
      "lat": 38.8708,
      "lon": -77.0558
    },
	"zoom":2730
  }
}, {
  "title": "Center on an invalid location",
  "description": "Center the map on a particular overlay",
  "valid": false,
  "payload": {
    "location": {
      "lat": 38.8708,
      "lon": -777.0558
    },
    "zoom": 2700
  }
}];
