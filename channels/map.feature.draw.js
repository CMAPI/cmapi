cmapi.channel["map.feature.draw"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.draw",
    "description": "Message to initiate a draw from a widget.  Allows user to draw a point, line or polygon by telling the map to start the user interaction for drawing.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The id of the overlay the feature that is to be edited.",
        "type": "string"
      },
      "featureId": {
        "description": "The unique identifier for the feature to be edited. ",
        "type": "string"
      },
      "messageId": {
        "description": "A unique id allowing the map to dispatch a response to this message.  See map.message channels.",
        "type": "string"
      },
      "type": {
        "description": "Type of feature to be drawn.  Options are line, polygon, point or symbol.  This field may be overloaded to handle future draw types such as bufferedline, circle, aoi, etc.",
        "type": "string"
      },
      "name": {
        "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
        "type": "string"
      },
      "properties": {
        "description": "A properties object defining the appearance of the graphic being drawn",
        "type": "object"
      }
    },
    "required": ["featureId", "messageId"]
  },
  "notes": [
    "A widget initiates a draw it SHALL issue a map.feature.draw message with a messageId.",
    "As soon as the map is placed in draw mode, the Map SHALL issue a map.message.progress messsage with the messageId provided by the map.feature.draw request, This message SHALL contain all the pertient properties set to there initial value. This SHASLL indicate to client widgets that the draw operation has started.",
    "A map SHALL send a map.message.progress message each time user adds to or modifies points/vertices. The messageId provided in the map.message.progress message SHALL match the message id from the original map.feature.draw message.  As the user inputs points the items SHALL be rendered on the map.",
    "While the map is in a draw state, it SHOULD ignore messages that manipulate the map view, such as map.view.set, to allow the user to focus on the drawing operation without the map view shifting on them.",
    "A map SHALL initiate a map.message.complete message upon completion of the draw.   The map SHALL continue to display the feature that was drawn.",
    "A map SHALL issue a map.feature.plot upon the completion of the draw to notify all widgets listening that a new feature has been generated.  The intent is that widgets outside of the widget issuing the draw message will not be aware of the new feature until it has completely drawn",
    "A widget MAY issue a map.message.cancel message if the user wishes to cancel a draw.  The drawing SHALL be removed from the map and the map SHALL send the map.message.complete message indicating the draw has been canceled.",
    "The map user interface MAY allow the user to cancel the drawing in which case the drawing SHALL be removed from the map and the map SHALL send the map.message.complete message indicating the draw has been canceled."
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]
};
