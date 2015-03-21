cmapi.channel["map.get"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.get",
    "description": "Request information about what overlay and feature data is on the map",
    "properties": {
      "recursive": {
        "description": "Determines whether the response will contain children or just one level.  If not included, it will treat this parameter as false.",
        "type": "boolean",
        "default" : false
      },
      "types" : {
        "type" : ["array","string"],
        "description" : "An array or either overlays or features"
      },
      "filter" : {
        "type" : "array",
            "properties":{
                "property":{
                    "type": "string",
                    "description": "This field must contain the name of the property field which value must match the value in the term property."
                },
                "term":{
                    "type": ["string", "number", "boolean"],
                    "description": "This field must contain the value to match. Type checking is performed. ('10' !== 10)"
                }
            },
        "additionalItems": true,
        "description" : "An array of terms to search for on the overlays and features."
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string"
      }
    },
    "required": ["menuId"]
  }
};
