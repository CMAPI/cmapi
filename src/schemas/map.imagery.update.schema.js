cmapi.channel["map.imagery.update"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.imagery.update",
        "type": "object",
        "properties": {
            "imageryId": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "transparency": {
                "type": "number",
                "minimum": 0.0,
                "maximum": 1.0
            }
        },
        "required": ["imageryId"]
    }
};
