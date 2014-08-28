cmapi.channel["map.get"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.get",
    "description": "Request information about what overlay and feature data is on the map",
    "properties": {
      "recursive": {
        "description": "Determines whether the response will contain children or just one level.  If not included, it will treat this parameters as false.",
        "type": "boolean",
        "default" : false
      },
      "types" : {
        "type" : ["array","string"],
        "description" : "An array or either overlays or features"
      },
      "filter" : {
        "type" : "array",
        "description" : "An array of terms to search for on the overlays and features."
      },
      "select" : {
        "type" : "array",
        "description" : ""
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string"
      }
    },
    "required": ["menuId"]
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]

};
