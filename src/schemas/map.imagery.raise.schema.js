cmapi.channel["map.imagery.raise"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.imagery.raise",
        "type": "object",
        "properties": {
            "imageryId": {
                "type": "string"
            },
            "step": {
                "type": ["integer", "string"],
                "default": 1,
                "enum": ['top']
            }
        },
        "required": ["imageryId"]
    }
};
