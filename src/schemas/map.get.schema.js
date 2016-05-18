cmapi.channel["map.get"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.get",
        "properties": {
            "recursive": {
                "type": "boolean",
                "default": false
            },
            "types": {
                "type": "array",
                "items": [{ "enum": ["overlay", "feature"] }]
            },
            "select": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "additionalItems": true
            },
            "filter": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties":{
                    "property": {
                        "type": "string"
                    },
                    "term": {
                        "type": ["string", "number", "boolean"]
                    }
                  }
                },
                "additionalItems": true
            },
            "messageId": {
                "type": "string"
            }

        },
        "required": ["types", "messageId"]
    }
};
