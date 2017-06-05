cmapi.channel["map.get.complete"].examples = [{
    "title": "Query reponse for top level overlays (see map.get for example)",
    "description": "",
    "valid": true,
    "payload":  {
        "messageId": "eeecb796-978a-5a52-49b7-836e09be5386",
        "status": "success",
        "originatingChannel": "map.get",
        "details": {
            "successes": {
                "overlay": [{
                    "overlayId": "3097c99b-c7f9-4906-8b54-f201cbd62fc1",
                    "name": "WMS Map Layers",
                    "description": "No Description",
                    "disabled": false,
                    "readOnly": false,
                    "visible": false,
                    "iconUrl": "default",
                    "properties": {}
                }, {
                    "overlayId": "8c0888d1-a3e1-4ad2-8ed7-dbc82d2d7b30",
                    "name": "Layers",
                    "description": "This overlay groups all KML, GEOJSON, Image feature ploted with no overlay defined.",
                    "disabled": false,
                    "readOnly": true,
                    "visible": true,
                    "iconUrl": "default",
                    "properties": {}
                }, {
                    "overlayId": "road charlie",
                    "name": "road charlie",
                    "description": "No Description",
                    "disabled": false,
                    "readOnly": false,
                    "visible": true,
                    "iconUrl": "default",
                    "properties": {
                        "readOnly": false,
                        "iconUrl": "http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",
                        "description": "This overlay has been created with the Validator."
                    }
                }]
            }
        },
        "failures": []
    }
}];
