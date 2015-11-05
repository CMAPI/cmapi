cmapi.channel["map.view.clicked"].description = {
  "description": "'Click', or report that map was clicked.  Maps MUST send this message when a user clicks the maps viewport.  It is optional for the map implementor if they will subscribe to this channel and perform any actions when receiving this message.",
  "properties": {
    "lat": {
      "description": "The latitude of the location that was clicked",
      "defaultValue": ""
    },
    "lon": {
      "description": "The longitude of the location that was clicked",
      "defaultValue": ""
    },
    "button": {
      "description": "Which mouse button was clicked.  Allowable values are right, left, and middle.  For backwards compatibility, if this attribute is not populated it MUST be treated as a left mouse click the same as if it were populated with left.",
      "defaultValue": "left",
	  "allowableValues" : "right, left, middle"
    },
    "type": {
      "description": "The type of click event. Allowable values are single and double.  For backwards compatibility, if this attribute is not populated it MUST be assumed to be a single mouse click and treated the same as if it were populated with single.",
      "defaultValue": "single",
	  "allowableValues" : "single, double"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.  Allowable values are alt, ctrl, shift, and none. For backwards compatibility, if this attribute is not populated it MUST be assumed that no additional keys were pressed and behave the same way as if it were populated with none.",
      "defaultValue": "none",
	  "allowableValues" : "alt, ctrl, shift, none"
    }
  }
};
