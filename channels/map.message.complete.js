cmapi.channel["map.message.complete"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.message.complete",
        "description": "Allows the Map Widget to report results after processing a message.  If a widget receives a map.message.complete message but does not have a record of sending a message with the matching messageId, then the widget should ignore the message.  Note that when a messageId is sent AND if any of the message payloads failed to be enacted, the response in the map.message.complete message SHOULD contain a string indicating why the particular payload failed.",
        "type": "object",
        "properties": {
            "messageId": {
                "description": "A globally unique ID that identifies the particular message or message batch that was completed.",
                "type": "string"
            },
            "originatingChannel":{
                "type": "string",
                "description": "This property SHALL contain the channel name of the request being completed. It is intended to provide guidance ar to the content of the details property."
            },
            "status": {
                "description": "A pre-defined string indicating whether the original batch request succeeded, failed, was a mix of successes and failures, or was cancelled.  Allowable values are â€œsuccessâ€?, â€œfailureâ€?, â€œmixedâ€?, or â€œcancelledâ€?.  Failure means the whole batch failed, mixed means that it is a mixture of successes and failures, success means that the whole batch request was successful, and cancelled means the map abandoned processing of the message and remains unchanged",
                "type": "enum",
                "enum": ["success","failure","mixed","cancelled"]
            },
            "details" : {
                "type" : "object",
                "description" : "An object whose details are specific to the original requesting channel/message.  Go to the specific channel definition for details of what this object should look like"
            },
            "failures" : {
                "description": "An array of objects that define what, if any, original request message payloads have failed to be executed.  If all message payloads associated with the identified transaction were executed successfully, this MUST return an empty array",
                "type" : "array",
                "properties": {
                    "failureObject": {
                        "description": "An object that defines a specific failure",
                        "type": "object",
                        "properties": {
                            "payload" : {
                                "type" : "object",
                                "description" : "The payload from the original request message that failed to properly execute."
                            },
                            "message" : {
                                "type" : "string",
                                "description" : "A message indicating why the requested transaction failed or partially failed."
                            }
                        }
                    }
                }
            }
        },
        "required" : ["failures", "messageId", "status"]
    },
    notes: []
};


