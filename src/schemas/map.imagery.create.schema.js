//TODO ,"arcgis","bing","google","mapbox types tobe added
cmapi.channel["map.imagery.create"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.imagery.create",
        "type": "object",
        "properties": {
            "imageryId": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "type": {
                "type": "string",
                "enum": ["wms", "wmts", "osm", "arcgis"],
                "default": "wms"
            },
            "visible": {
                "type": "boolean",
                "default": true
            },
            "transparency": {
                "type": "number",
                "default": 1.0,
                "minimum": 0.0,
                "maximum": 1.0
            },
            "bounds": {
                "type": "object",
                "default": " ",
                "properties": {
                    "southWest": {
                        "type": "object",
                        "properties": {
                            "lat": {
                                "type": "number",
                                "minimum": -90,
                                "maximum": 90
                            },
                            "lon": {
                                "type": "number",
                                "minimum": -180,
                                "maximum": 180
                            }
                        },
                        "required": ["lat", "lon"]
                    },
                    "northEast": {
                        "type": "object",
                        "properties": {
                            "lat": {
                                "type": "number",
                                "minimum": -90,
                                "maximum": 90
                            },
                            "lon": {
                                "type": "number",
                                "minimum": -180,
                                "maximum": 180
                            }
                        },
                        "required": ["lat", "lon"]
                    }
                },
                "required": ["southWest", "northEast"]
            },
            "details": {
                "type": "object",
                "oneOf": [
                    {
                        "title": "wms",
                        "type": "object",
                        "properties": {
                            "url": {
                                "type": "string"
                            },
                            "layers": {
                                "type": "string"
                            },
                            "params": {
                                "type": "object"
                            }
                        },
                        "required": ["url", "layers"]
                    },
                    {
                        "title": "wmts",
                        "type": "object",
                        "properties": {
                            "url": {
                                "type": "string"
                            },
                            "layer": {
                                "type": "string"
                            },
                            "format": {
                                "type": "string",
                                "default": "image/jpeg"
                            },
                            "style": {
                                "type": "string"
                            },
                            "tileMatrixSetID": {
                                "type": "string"
                            }
                        },
                        "required": ["url", "layer", "style", "tileMatrixSetID"]
                    },
                    {
                        "title": "osm",
                        "type": "object",
                        "properties": {
                            "url": {
                                "type": "string"
                            }
                        },
                        "required": ["url"]
                    },
                    {
                        "title": "arcgis",
                        "type": "object",
                        "properties": {
                            "url": {
                                "type": "string"
                            },
                            "token": {
                                "type": "string"
                            },
                            "layers": {
                                "type": "string"
                            }
                        },
                        "required": ["url", "token"]
                    }
                ]
            }
        },
        "required": ["imageryId", "type"]
    }
};
