cmapi.channel["map.status.format"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.format",
    "description": "Send out the list of data formats that the map widget supports; in other words, this map implementation supports the following feature data formats.",
    "type": "object",
    "properties": {
        "formats":{
            "type":"array",
            "items":{
                "type":"object",
                "properties":{
                    "format":{
                        "type": "string",
                        "description": "This contans the format supported."
                    },
                    "supportedOperations":{
                        "type": "array",
                        "items":{
                            "properties":{
                                "enum": ["plot", "draw", "edit"],
                                "description": "<ol><li>plot - The map engine supports ploting an object of this format.</li><li>draw - The map engine supports drawing an obect of this format.</li><li>edit - The map engine supports editing objects of theis format.</li></ol>"
                            }
                        },
                        "uniqueItems": true,
                        "minItems": 1,
                        "maxItems": 3
                    }
                }
            },
            "uniqueItems": true,
            "minItems": 1,
            "description": "An array of formats supported by the current map engine implementation."
        },
    },
    "required": ["formats"]
  },
  "notes": []
};