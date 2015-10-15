cmapi.channel["map.message.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.message.complete",
    "type": "object",
    "properties": {
      "messageId": {
        "type": "string"
      },
      "originatingChannel": {
        "type": "string"
      },
      "status": {
        "type": "string",
        "enum": ["success", "failure", "mixed", "cancelled"]
      },
      "details": {
        "type": "object"
      },
      "failures": {
        "type": "array",
        "properties": {
          "failureObject": {
            "type": "object",
            "properties": {
              "payload": {
                "type": "object"
              },
              "message": {
                "type": "string"
              }
            }
          }
        }
      }
    },
    "required": ["failures", "messageId", "status", "details"]
  }
};
