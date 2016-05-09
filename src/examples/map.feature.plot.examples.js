cmapi.channel["map.feature.plot"].examples = [{
  "title": "Plot KML",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.mapWidget.1",
    "feature": "<kml xmlns=\"http://www.opengis.net/kml/2.2\" xmlns:gx=\"http://www.google.com/kml/ext/2.2\" xmlns:kml=\"http://www.opengis.net/kml/2.2\" xmlns:atom=\"http://www.w3.org/2005/Atom\"><Placemark id=\"example.mapWidget.1.1\"><name>World Trade Center</name><description><![CDATA[Site of World Trade Center]]></description><Style><IconStyle><Icon><href>https://localhost/widgets/mapWidget/images/blu-circle.png</href></Icon><hotSpot x=\"0.5\" y=\"0\" xunits=\"fraction\" yunits=\"fraction\"></hotSpot></IconStyle></Style><Point><coordinates>-74.01324033737183,40.71149172571141,0 </coordinates></Point></Placemark></kml>",
    "name": "World Trade Center",
    "zoom": true
  }
}, {
  "title": "Plot KML",
  "valid": false,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "feature": "<kml xmlns=\"http://www.opengis.net/kml/2.2\" xmlns:gx=\"http://www.google.com/kml/ext/2.2\" xmlns:kml=\"http://www.opengis.net/kml/2.2\" xmlns:atom=\"http://www.w3.org/2005/Atom\"><Placemark id=\"example.mapWidget.1.1\"><name>World Trade Center</name><description><![CDATA[Site of World Trade Center]]></description><Style><IconStyle><Icon><href>https://localhost/widgets/mapWidget/images/blu-circle.png</href></Icon><hotSpot x=\"0.5\" y=\"0\" xunits=\"fraction\" yunits=\"fraction\"></hotSpot></IconStyle></Style><Point><coordinates>-74.01324033737183,40.71149172571141,0 </coordinates></Point></Placemark></kml>",
    "name": "World Trade Center",
    "zoom": true
  }
}, {
  "title": "Plot GeoJSON",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.geojson.1",
    "format": "geojson",
    "feature": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "timePrimitive": {
          "timeSpan": {
            "begin": "1937-01-01T12:00:27.87+00:20",
            "end": "1976-01-01T12:00:27.87+00:20"
          },
          "timeSpans": [{
            "begin": "1937-01-01T12:00:27.87+00:20",
            "end": "1976-01-01T12:00:27.87+00:20"
          }, {
            "begin": "1976-01-01T12:00:27.87+00:20",
            "end": "1988-01-01T12:00:27.87+00:20"
          }]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              100,
              0
            ],
            [
              101,
              0
            ],
            [
              101,
              1
            ],
            [
              100,
              1
            ],
            [
              100,
              0
            ]
          ]
        },
        "properties": {
          "style": {
            "lineStyle": {
              "color": {
                "r": 255,
                "g": 0,
                "b": 255,
                "a": 0.5
              }
            },
            "polyStyle": {
              "color": {
                "r": 0,
                "g": 255,
                "b": 0,
                "a": 0.25
              }
            },
            "name": "test polygon",
            "id": "tp13456",
            "description": "polygon pop-up text"
          }
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Line",
          "coordinates": [
            [
              80,
              3
            ],
            [
              81,
              3
            ],
            [
              81,
              5
            ],
            [
              82,
              2
            ]
          ]
        },
        "properties": {
          "style": {
            "lineStyle": {
              "color": {
                "r": 0,
                "g": 255,
                "b": 255,
                "a": 0.5
              }
            }
          }
        },
        "name": "crossingLine",
        "id": "0x45632",
        "description": "this is a line you don’t want to cross"
      }]
    },
    "name": "Sample GeoJSON Feature Collection",
    "zoom": true,
    "readOnly": false
  }
}, {
  "title": "Plot Area of Interest (AOI)",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.aoi.1",
    "format": "geojson",
    "feature": {
      "type": "Feature",
      "geometry": {
        "type": "point",
        "coordinates": [
          100,
          0
        ]
      }
    },
    "properties": {
      "name": "SampleAOIBufferedpoint(i.e., Point/Radius)",
      "aoi": {
        "type": "point-radius",
        "buffer": 1000
      },
      "style": {
        "lineStyle": {
          "color": {
            "r": 255,
            "g": 0,
            "b": 255,
            "a": 1
          }
        },
        "polyStyle": {
          "color": {
            "r": 0,
            "g": 255,
            "b": 25,
            "a": 0.5
          },
          "iconStyle": {
            "url": "http: //www.coolicons.org/icon"
          }
        },
        "id": "0x75023443",
        "description": "ThisisimportanttextfortheAOIpopup"
      }
    },
    "zoom": true,
    "readOnly": false
  }
}];
