cmapi.channel["map.feature.draw"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.draw",
    "description": "Message to initiate a draw from a widget.  Allows user to draw a point, line or polygon by telling the map to start the user interaction for drawing.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay the feature to be drawn should be loaded into. If an overlay with this ID already exists, the new feature will merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
        "type": "string",
		"default": "sending widget's ID"
      },
      "featureId": {
        "description": "The unique identifier for the feature to be drawn. ",
        "type": "string"
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message and which MUST be used in the associated map.message.complete, map.message.progress, and map.message.cancel messages as defined in the map.message channels.",
        "type": "string"
      },
      "type": {
        "description": "Type of feature to be drawn.  Supported types include 'line', 'polygon', 'point' or 'symbol'.  Optional types include 'bufferedline', 'circle', 'aoi'.  Additional types may be added in the future.",
        "type": "string",
		"default": "line"
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
    "If a widget sends a map.feature.draw message, the map SHALL go into draw mode.",
    "When the map is placed in draw mode, the map SHALL issue a map.message.progress message using the messageId provided by the originating map.feature.draw request, to indicate to client widgets that the draw operation has started.",
    "While in draw mode, the map SHALL send a map.message.progress message each time the user adds, deleted, or modifies points/vertices using the messageId provided by the originating map.feature.draw message.",
    "While in draw mode, as the user inputs, deletes, or updates points, the results SHALL be rendered on the map.",
	"While the map is in draw mode, it SHOULD ignore messages that manipulate the map view, such as map.view.set, to allow the user to focus on the drawing operation without the map view shifting on them.",
    "If the drawing is completed, the map SHALL initiate a map.message.complete message with the messageId of the original map.feature.draw request AND the map SHALL continue to display the feature that was drawn.",
    "If the drawing is completed, the map SHALL issue a map.feature.plot message to notify all widgets listening that a new feature has been generated.  The intent is that widgets other than the one issuing the draw message will not be aware of the new feature until it has been successfully drawn",
    "A drawing may be cancelled by issuing a map.message.cancel message, or via the map user interface.",
	"If the draw mode is cancelled before the drawing is completed, the map SHALL issue a map.message.complete message with the messageId of the original map.feature.edit message and a status of 'cancelled' AND the feature being drawn SHALL be removed from the map"
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]
};
