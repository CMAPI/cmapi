cmapi.channel["cmapi.appendix.b"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "Appendix B - GeoJSON Support",
    "description": "The GeoJSON specification can be found at <a href=\"http://geojson.org/geojson-spec.html\" >http://geojson.org/geojson-spec.html</a>.  The Common Map Widget API specification extends the GeoJSON specification by adding the “style”, “name”, “id”, “description“, and “timePrimitive“ objects to the “Properties” object of the GeoJSON specification.  These extended objects ONLY apply to the GeoJSON Feature object.",
    "type": "object",
    "required": ["type"],
    "properties": {
      "crs": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "crs",
        "description": "a Coordinate Reference System object",
        "oneOf": [{
          "title": "Named CRS",
          "additionalProperties": false,
          "required": ["type", "properties"],
          "properties": {
            "type": {
              "enum": [
                "name"
              ]
            },
            "properties": {
              "additionalProperties": false,
              "required": ["name"],
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                }
              }
            }
          }
        }, {
          "title": "Linked CRS",
          "additionalProperties": false,
          "required": ["type", "properties"],
          "properties": {
            "type": {
              "enum": [
                "link"
              ]
            },
            "properties": {
              "additionalProperties": false,
              "required": ["href"],
              "type": "object",
              "properties": {
                "href": {
                  "type": "string",
                  "format": "uri"
                },
                "type": {
                  "type": "string",
                  "description": "Suggested values: proj4, ogjwkt, esriwkt"
                }
              }
            }
          }
        }]
      },
      "bbox": {
        "description": "A bounding box as defined by GeoJSON",
        "type": "array",
        "items": {
          "type": "number"
        }
      },

      "type": {
        "enum": ["LineString", "Polygon", "Point", "MultiPoint", "MultiLineString", "MultiPolygon", "GeometryCollection", "Feature", "FeatureCollection"]
      },
      "coordinates": {
        "description": "A Valid GoeJSON coordinate structure dependant on type",
        "type": "array",
        "items": {
          "type": ["number", "array"]
        }
      },
      "geometries": {
        "description": "An array of GeoJSON Objects representing any of the types",
        "type": "array",
        "items": {
          "type": "array"
        }
      },
      "features": {
        "description": "An array of GeoJSON Feature Objects",
        "type": "array",
        "items": {
          "type": "object"
        }
      },
      "properties": {
        "type": "object",
        "properties": {
          "style": {
            "type": "object",
            "description": "",
            "properties": {
              "lineStyle": {
                "type": "object",
                "description": {
                  "type": "string",
                  "description": ""
                },
                "properties": {
                  "color": {
                    "description": "",
                    "type": "object",
                    "properties": {
                      "r": {
                        "description": "",
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                      },
                      "g": {
                        "description": "",
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                      },
                      "b": {
                        "description": "",
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                      },
                      "a": {
                        "description": "",
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                      }
                    },
                    "required": [
                      "r",
                      "g",
                      "b",
                      "a"
                    ]
                  }
                }
              },
              "polyStyle": {
                "type": "object",
                "description": "",
                "properties": {
                  "color": {
                    "description": "",
                    "type": "object",
                    "properties": {
                      "r": {
                        "description": "",
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                      },
                      "g": {
                        "description": "",
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                      },
                      "b": {
                        "description": "",
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                      },
                      "a": {
                        "description": "",
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                      }
                    },
                    "required": [
                      "r",
                      "g",
                      "b",
                      "a"
                    ]
                  }
                }
              },
              "iconStyle": {
                "type": "object",
                "description": "",
                "properties": {
                  "url": {
                    "type": "uri",
                    "description": ""
                  }
                }
              },
              "name": {
                "type": "string",
                "description": ""
              },
              "id": {
                "type": "string",
                "description": ""
              },
              "timePrimitive": {
                "type": "object",
                "properties": {
                  "timeSpan": {
                    "type": "object",
                    "properties": {
                      "begin": {
                        "type": "string",
                        "format": "date-time",
                        "description": ""
                      },
                      "end": {
                        "type": "string",
                        "format": "date-time",
                        "description": ""
                      }
                    }
                  },
                  "timeStamp": {
                    "type": "string",
                    "format": "date-time",
                    "description": ""
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  notes: [
    'See <a href=\"http://www.w3.org/wiki/CSS3/Color/RGBA" >http://www.w3.org/wiki/CSS3/Color/RGBA</a> for more info on RGBA.'
  ]
};