cmapi.channel["map.message.progress"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.message.progress",
        "description": "Allows the Map Widget to report progress during the processing of a message.  If a widget receives a map.message.progress message but does not have a record of sending a message with the matching messageId, then the widget should ignore the message.  Note not all channels that support a messageId will report progress between when the message is sent and the return of the map.message.complete.  See each channel’s definition for map.message.progress details object so see if the channel supports progress messages.  Multiple map.message.progress events may be sent for a single message i.e. every time a new point is added to a line during the processing of a map.feature.draw message, a map.message.progress message will be sent with the latest geometry of the line being drawn as shown in Example 1 below.",
        "type": "object",
        "properties": {
                  "messageId": {
                    "description": "An id uniquely identifying this message from the caller.  Taken from the original request message.",
                    "type": "string"
                },
                "details" : {
                    "type" : "object",
                    "description" : "An object whose details are specific to the original requesting channel/message.  Go to the specific channel definition for details of what this object should look like"
                }
        },
        "required" : ["messageId", "details"]
    },
    notes: ["The messageId’s match in the above examples.  This allows the widget receiving the map.message.progress message to identify the original request message the progress applies to."]
};


