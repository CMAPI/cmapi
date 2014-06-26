cmapi.channel["map.view.clicked"].examples = [
{
    "title": "Map Clicked",
    "description": "Report that the map was clicked at a location",
    "valid": true,
    "payload": {
        "lat": 40.195659093364654,
        "lon": -74.28955078125,
        "button": "right",
        "type": "single",
        "keys": ["shift", "ctrl"]
    }
},
{
    "title": "Map Clicked",
    "description": "Report that the map was clicked at a location",
    "valid": true,
    "payload": {
        "lat": 40.195659093364654,
        "lon": -74.28955078125,
        "button": "middle",
        "type": "double",
        "keys": ["none"]
    }
},
{
    "title": "Map Clicked",
    "description": "Report that the map was clicked at a location",
    "valid": false,
    "payload": {
        "lat": 40.195659093364654,
        "lon": -74.28955078125,
        "button": "taco",
        "type": "single",
        "keys": ["shift", "ctrl"]
    }
},
{
    "title": "Map Clicked",
    "description": "Report that the map was clicked at a location",
    "valid": false,
    "payload": {
        "lat": 40.195659093364654,
        "lon": -74.28955078125,
        "type": "single",
        "keys": ["shift", "ctrl"]
    }
}
];