cmapi.channel["map.message.progress"].description = {
  "description": "Allows the Map Widget to report progress during the processing of a message.  If a widget receives a map.message.progress message but does not have a record of sending a message with the matching messageId, then the widget should ignore the message.  Note that not all channels that support a messageId will report progress between when the message is sent and the return of the map.message.complete.  See each channel’s definition for map.message.progress details object so see if the channel supports progress messages.  Multiple map.message.progress events may be sent for a single message. E.g., every time a new point is added to a line during the processing of a map.feature.draw message, a map.message.progress message will be sent with the latest geometry of the line being drawn as shown in Example 1 below.",
  "properties": {
    "messageId": {
      "description": "A globally unique ID that identifies the particular message or message batch that progress is being reported on.",
      "defaultValue": ""
    },
    "originatingChannel": {
      "description": "This property SHALL contain the channel name of the original request. It is intended to provide guidance as to the content of the details property.",
      "defaultValue": ""
    },
    "details": {
      "description": "Details relevant to the completion of the messages sent over the map.feature.edit, map.feature.draw channels. Specific object formats are listed under map.message.progress section.",
      "defaultValue": ""
    }
  }
};
