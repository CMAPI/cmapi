cmapi.channel["map.imagery.lower"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.imagery.lower",
        "type": "object",
        "properties": {
            "imageryId": {
                "type": "string"
            },
            "step": {
                "type": ["integer", "string"],
                "default": 1,
                "enum": ["bottom"]
            }
        },
        "required": ["imageryId"]
    }
};
