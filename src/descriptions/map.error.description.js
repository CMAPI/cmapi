cmapi.channel["map.error"].description = {
  "description": "Report runtime error that caused a message to fail being processed.  If the map implementation supports the map.message.complete channels and the message includes the messageId property, errors SHALL instead be sent back via the map.message.complete failures property for the corresponding failed message, and NOT on the map.error channel.",
  "properties": {
    "sender": {
      "description": "Sender ID of message that caused error.",
      "defaultValue": ""
    },
    "type": {
      "description": "Type of message that caused error.",
      "defaultValue": ""
    },
    "msg": {
      "description": "The message that caused error.",
      "defaultValue": ""
    },
    "error": {
      "description": "A description of the error.",
      "defaultValue": ""
    }
  }
};
