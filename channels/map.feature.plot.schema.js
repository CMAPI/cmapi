cmapi.channels.schema["map.feature.plot"] = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot",
    "description": "Plots feature data on the map.",
    "type": "object",
    "properties": {
              "overlayId": {
                "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, the new feature is merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget’s ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
                "type": "string"
            },
            "featureId": {
                "description": "Unique identifier for the given feature data. Note that feature IDs MUST be unique within a given overlay. Reusing a feature ID will be considered a reload, with the original feature data being removed and replaced by the new feature data.",
                "type": "string"
            },
            "name": {
                "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
                "type": "string"
            },
            "format": {
                "description": "Data format of the given feature. If no format is specified, the format defaults to “kml.” A list of formats supported by a particular map implementation may be obtained by querying the map using the map.status channel (see map.status). Note that for this version of the Common Map Widget API, the only format that all map implementations must support is KML.",
                "type": "string"
            },
            "feature": {
                "description": "Feature data to be loaded into the map.",
                "type": "object"
           },
            "zoom": {
                "description": "true if map should zoom to newly loaded feature data, false if not. Default is false.",
                "type": "boolean"
            }
    },
    "required": ["featureId", "feature"]
};


