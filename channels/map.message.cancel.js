cmapi.channel["map.message.cancel"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.message.cancel",
    "description": "Allows a widget to cancel a batch or long-running message exchange that has not yet completed.",
    "type": "object",
    "properties": {
      "messageId": {
        "description": "A globally unique ID that identifies the particular message or message batch that was cancelled.",
        "type": "string"
      }
    },
    "required": ["messageId"]
  },
  "notes": ["Cancelling a message only works with those channels that indicate they are cancel-able, such as map.feature.draw and map.feature.edit.  ",
    "When the map widget receives a message over the map.message.cancel channel it SHALL attempt to cancel the indicated previous message (if possible).",
    "IF the map widget was able to successfully cancel the indicated previous message, it SHALL ensure that the applicable map.message.complete message is returned with a status = “cancelled”.",
    "If it was NOT able to cancel the indicated previous message, then it will have no effect on the applicable map.message.complete message (i.e., the applicable map.message.complete message will be sent as if no map.message.cancel message was ever sent).  In other words, the map.message.cancel message is a one-way message event that requires no actual return, but only affects pending or outstanding messages and does not require any additional response messages."
  ],
  ,
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]
};
