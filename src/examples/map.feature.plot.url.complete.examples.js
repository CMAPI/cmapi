cmapi.channel["map.feature.plot.url.complete"].examples = [
    {
    "title": "Plot KML From URL",
    "description" : "",
    "valid": true,
    "payload": {
        "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1", 
        "featureId": "example.mapWidget.2", 
		"format":"kml",
        "url": "https://developers.google.com/kml/documentation/KML_Samples.kml", 
        "name": "Samples", 
        "zoom": true,
		"params":{}
        }
    },
    {
    "title": "Plot WMS",
    "valid": true,
    "payload": {
        "overlayId":"xyz", 
        "featureId":"def", 
        "name": "Bodies of Water", 
        "format":"wms", 
        "url": "http://demo.opengeo.org/geoserver/wms", 
		"zoom": false,
        "params": {
            "layers": "topp:tasmania_water_bodies", 
            "transparent": true, 
            "format": "image/gif"
            }   
        }
    }
];



