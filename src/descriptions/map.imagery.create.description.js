cmapi.channel["map.imagery.create"].description = {
    "description": "Create an Imagery.",
    "properties": {
        "imageryId": {
            "description": "Unique identifier for the given imagery. Note that imagery IDs MUST be unique. If an imagery with the given ID already exists, this message will have no effect."
        },
        "name": {
            "description": "Name for the given imagery. Note that imagery names do not have to be unique and are intended for display purposes only."
        },
        "type": {
            "description": "Defines the type of imagery"
        },
        "visible": {
            "description": "Defines if imagery is visible"
        },
        "transparency": {
            "description": "Defines transparency of the imagery."
        },
        "bounds": {
            "description": "Bounding box of imagery.This bounds can limit the visible portion of the imagery.",
            "defaultValue": "",
            "properties": {
                "southWest": {
                    "description": "Bottom right of the bounds",
                    "defaultValue": "",
                    "properties": {
                        "lat": {
                            "description": "The latitude value of the point",
                            "defaultValue": ""
                        },
                        "lon": {
                            "description": "The longitude value of the point",
                            "defaultValue": ""
                        }
                    }
                },
                "northEast": {
                    "description": "Top left of the bounds",
                    "defaultValue": "",
                    "properties": {
                        "lat": {
                            "description": "The latitude value of the point",
                            "defaultValue": ""
                        },
                        "lon": {
                            "description": "The longitude value of the point.",
                            "defaultValue": ""
                        }
                    }
                }
            }
        },
        "details": {
            "description": "An object holds imagery layers detailed attributes.",
            "oneOf": [
                {
                    "description": "",
                    "properties": {
                        "url": {
                            "description": "The URL of the WMS service."
                        },
                        "layers": {
                            "description": "The layers to include, separated by commas."
                        },
                        "params": {
                            "description": "Additional parameters to pass to the WMS server in the GetMap URL."
                        }
                    }
                },
                {
                    "properties": {
                        "url": {
                            "description": "The WMTS server url."
                        },
                        "layer": {
                            "description": " The layer name for WMTS requests."
                        },
                        "format": {
                            "description": "The MIME type for images to retrieve from the server."
                        },
                        "style": {
                            "description": "The style name for WMTS requests."
                        },
                        "tileMatrixSetID": {
                            "description": "The identifier of the TileMatrixSet to use for WMTS requests."
                        }
                    }
                },
                {
                    "properties": {
                        "url": {
                            "description": "The OpenStreetMap server url."
                        }
                    }
                },
                {
                    "properties":{
                        "url":{
                            "description":"	The URL of the ArcGIS MapServer service."
                        },
                        "token":{
                            "description":"The ArcGIS token used to authenticate with the ArcGIS MapServer service."
                        },
                        "layers":{
                            "description":"A comma-separated list of the layers to show, or undefined if all layers should be shown."
                        }
                    }
                }
            ]
        }
    }
};
