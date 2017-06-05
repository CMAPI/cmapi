cmapi.channel["map.get"].examples = [{
    "title": "Query for top level overlays",
    "description": "",
    "valid": true,
    "payload": {
        "types": ["overlay"],
        "recursive": false,
        "select": ["overlayId",
            "name", "properties",
            "parentId"
        ],
        "messageId": "eeecb796-978a-5a52-49b7-836e09be5386"
    },
    "messageComplete": {
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
}, {
    "title": "Query for all features",
    "description": "",
    "valid": true,
    "payload": {
        "types": ["feature"],
        "recursive": true,
        "select": ["featureId", "format", "overlayId", "name", "properties"],
        "messageId": "bb2dc0b2-a149-3dd2-12b9-64911d6b7351"
    },
    "messageComplete": {
        "messageId": "bb2dc0b2-a149-3dd2-12b9-64911d6b7351",
        "status": "success",
        "originatingChannel": "map.get",
        "details": {
            "successes": {
                "feature": [
                    { "id": "2275fbf2-35e5-4f55-81e7-2d230a1541a5", "overlayId": "3097c99b-c7f9-4906-8b54-f201cbd62fc1", "name": "fort irwin", "url": "http://127.0.0.1/tigr/WmsServer.ashx", "format": "wms", "params": { "transparent": true, "format": "image/png", "version": "1.3.0", "styles": "", "srs": "CRS:84" } }, { "id": "0111830b-7206-47ab-b00c-bcfc947a56c8", "overlayId": "3097c99b-c7f9-4906-8b54-f201cbd62fc1", "name": "ArcGIS", "url": "http://sampleserver1.arcgisonline.com/ArcGIS/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/WMSServer", "format": "wms", "params": { "transparent": true, "format": "image/png", "version": "1.3.0", "styles": "", "srs": "CRS:84" } }, { "id": "cd542cf9-7fcd-4d4a-b584-39c31360cdde", "overlayId": "3097c99b-c7f9-4906-8b54-f201cbd62fc1", "name": "USGS Topo", "url": "http://services.nationalmap.gov/arcgis/services/USGSTopoLarge/MapServer/WMSServer", "format": "wms", "params": { "transparent": true, "format": "image/png", "version": "1.3.0", "styles": "", "srs": "CRS:84" } }, { "overlayId": "road charlie", "featureId": "goku foxtrot", "name": "goku foxtrot", "description": "", "format": "kml", "data": "<Placemark>\n\t<name>goku foxtrot</name>\n\t<altitude>329</altitude>\n\t<Style>\n\t\t<IconStyle>\n\t\t\t<scale>1.1</scale>\n\t\t\t<Icon>\n\t\t\t\t<href>http://maps.google.com/mapfiles/kml/paddle/wht-blank.png</href>\n\t\t\t</Icon>\n\t\t\t<hotSpot x=\"32\" y=\"1\" xunits=\"pixels\" yunits=\"pixels\"/>\n\t\t</IconStyle>\n\t</Style>\n\t<Point>\n\t\t<coordinates>-153,-4,329</coordinates>\n\t</Point>\n</Placemark>\n", "params": {}, "visible": true, "readOnly": false, "properties": { "lineStyle": "solid", "iconXOffset": 32, "xUnits": "pixels", "iconYOffset": 1, "yUnits": "pixels", "readOnly": false, "disabled": false } }
                ]
            }
        }
    },
    "failures": []
}, {
    "title": "Query for overlay with the ID of 'Road Charlie'",
    "description": "",
    "valid": true,
    "payload": {
        "types": ["overlay"],
        "recursive": false,
        "select": ["overlayId", "name", "properties", "parentId"],
        "filter": [{ "property": "overlayId", "term": "road charlie" }],
        "messageId": "7dda52a6-c186-9507-93fa-9c66f80e8739"
    },
    "messageComplete": {
        "messageId": "7dda52a6-c186-9507-93fa-9c66f80e8739",
        "status": "success",
        "originatingChannel": "map.get",
        "details": {
            "successes": {
                "overlay": [{
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
        }
    },
    "failures": []

}, {
    "title": "Query for feature with the featureId of 'goku foxtrot' and overlayId of 'road charlie'",
    "description": "",
    "valid": true,
    "payload": {
        "types": ["feature"],
        "recursive": true,
        "select": [
            "featureId",
            "overlayId",
            "parentId",
            "format",
            "feature",
            "properties"
        ],
        "filter": [{
            "property": "featureId",
            "term": "goku foxtrot"
        }, {
            "property": "overlayId",
            "term": "road charlie"
        }],
        "messageId": "b8f45f3b-5fce-0a0b-e792-dcf6ba014438"
    },
    "messageComplete": {
        "messageId": "b8f45f3b-5fce-0a0b-e792-dcf6ba014438",
        "status": "success",
        "originatingChannel": "map.get",
        "details": {
            "successes": {
                "feature": [{
                    "overlayId": "road charlie",
                    "featureId": "goku foxtrot",
                    "name": "goku foxtrot",
                    "description": "",
                    "format": "kml",
                    "data": "<Placemark>\n\t<name>goku foxtrot</name>\n\t<altitude>329</altitude>\n\t<Style>\n\t\t<IconStyle>\n\t\t\t<scale>1.1</scale>\n\t\t\t<Icon>\n\t\t\t\t<href>http://maps.google.com/mapfiles/kml/paddle/wht-blank.png</href>\n\t\t\t</Icon>\n\t\t\t<hotSpot x=\"32\" y=\"1\" xunits=\"pixels\" yunits=\"pixels\"/>\n\t\t</IconStyle>\n\t</Style>\n\t<Point>\n\t\t<coordinates>-153,-4,329</coordinates>\n\t</Point>\n</Placemark>\n",
                    "params": {},
                    "visible": true,
                    "readOnly": false,
                    "properties": {
                        "lineStyle": "solid",
                        "iconXOffset": 32,
                        "xUnits": "pixels",
                        "iconYOffset": 1,
                        "yUnits": "pixels",
                        "readOnly": false,
                        "disabled": false
                    }
                }]
            }
        },
        "failures": []
    }
}];
