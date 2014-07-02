cmapi.channel["map.view.zoom"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.view.zoom",
        "description": "Zoom the map to a particular range",
        "type": "object",
        "properties": {
                  "range": {
                    "description": "The distance in meters from the map (note that most 2-D map renderers do not support infinite zoom and the range will be translated into the nearest supported zoom level).",
                    "type": "number",
					"default": "none"
                }
        },
        "required": ["range"]
    },
    notes: []
}


