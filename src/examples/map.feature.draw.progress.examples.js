cmapi.channel["map.feature.draw.progress"].examples = [{
  "title": "draw a feature",
  "description": "Progress event while drawing a new feature on the map",
  "valid": true,
  "payload": {
    "overlayId": "mario foxtrot",
    "featureId": "broccoli yankee",
    "name": "broccoli yankee",
    "type": "line",
    "format": "geojson",
    "feature": {
      "coordinates": [
        [19.971319934313282, 29.202454144467602],
        [22.689376560644526, 25.718380484872096],
        [28.624369253738855, 25.201776348153214]
      ],
      "type": "LineString"
    },
    "status": "update",
    "updates": {
      "type": "add",
      "indices": [2],
      "coordinates": [{
        "lat": 29.202454144467602,
        "lon": 19.971319934313282,
        "alt": 0
      }, {
        "lat": 25.718380484872096,
        "lon": 22.689376560644526,
        "alt": 0
      }, {
        "lat": 25.201776348153214,
        "lon": 28.624369253738855,
        "alt": 0
      }]
    }
  }
}];
