cmapi.channel["map.feature.draw"].notes = [
    "If a widget sends a map.feature.draw message, the map SHALL go into draw mode.",
    "When the map is placed in draw mode, the map SHALL issue a map.message.progress message using the messageId provided by the originating map.feature.draw request and the status equal 'start', to indicate to client widgets that the draw operation has started.",
    "While in draw mode, the map SHALL send a map.message.progress message each time the user adds, deleted, or modifies points/vertices using the messageId provided by the originating map.feature.draw message and the status equal 'update'.",
    "While in draw mode, as the user inputs, deletes, or updates points, the results SHALL be rendered on the map.",
    "While the map is in draw mode, it SHOULD ignore messages that manipulate the map view, such as map.view.set, to allow the user to focus on the drawing operation without the map view shifting on them.",
    "If the drawing is completed, the map SHALL initiate a map.message.complete message with the messageId of the original map.feature.draw request AND the map SHALL continue to display the feature that was drawn.",
    "If the drawing is completed, the map SHALL issue a map.feature.plot message to notify all widgets listening that a new feature has been generated.  The intent is that widgets other than the one issuing the draw message will not be aware of the new feature until it has been successfully drawn",
    "A drawing may be cancelled by issuing a map.message.cancel message, or via the map user interface.",
    "If the draw mode is cancelled before the drawing is completed, the map SHALL issue a map.message.complete message with the messageId of the original map.feature.edit message and a status of 'cancelled' AND the feature being drawn SHALL be removed from the map"
  ];