cmapi.channel["map.message.complete"].description = {
  "description": "Allows the Map Widget to report results after processing a message.  If a widget receives a map.message.complete message but does not have a record of sending a message with the matching messageId, then the widget should ignore the message.  Note that when a messageId is sent AND if any of the message payloads failed to be enacted, the response in the map.message.complete message SHOULD contain a string indicating why the particular payload failed.",
  "properties": {
    "messageId": {
      "description": "A globally unique ID that identifies the particular message or message batch that was completed.",
      "defaultValue": ""
    },
    "originatingChannel": {
      "description": "This property SHALL contain the channel name of the request being completed. It is intended to provide guidance as to the content of the details property.",
      "defaultValue": ""
    },
    "status": {
      "description": "A pre-defined string indicating whether the original batch request succeeded, failed, was a mix of successes and failures, or was cancelled.  Allowable values are:<ul><li>failure - Failure means the whole batch failed.</li><li>mixed - Mixed means that it is a mixture of successes and failures.</li><li>success - Success means that the whole batch request was successful.</li><li>cancelled = Cancelled means the map abandoned processing of the message and remains unchanged.</li></ul>",
      "defaultValue": ""
    },
    "details": {
      "description": "An object whose details are specific to the original requesting channel/message.  Go to the specific channel definition for details of what this object should look like.  In the case that no details object is specified, the details object should be populated as an empty object for consistency.",
      "defaultValue": ""
    },
    "failures": {
      "description": "An array of objects that define what, if any, original request message payloads have failed to be executed.  If all message payloads associated with the identified transaction were executed successfully, this MUST return an empty array",
      "defaultValue": "",
      "properties": {
        "failureObject": {
          "description": "An object that defines a specific failure",
          "defaultValue": "",
          "properties": {
            "payload": {
              "description": "The payload from the original request message that failed to properly execute.",
              "defaultValue": ""
            },
            "message": {
              "description": "A message indicating why the requested transaction failed or partially failed.",
              "defaultValue": ""
            }
          }
        }
      }
    }
  }
};
