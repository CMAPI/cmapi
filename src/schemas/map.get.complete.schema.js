cmapi.channel["map.get.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for a map.get response in the map.message.complete Details object",
    "type": "object",
    "properties": {
      "successes": {
        "type": "object",
        "properties" : {
          "overlay":{
            "type" : "array"
          },
          "feature":{
            "type" : "array"
          }
        }
      }
    },
    "required": ["messageId", "details"]
  }
};
