cmapi.overview["cmapi.core.general.requirements.whentosend.overview"] = {
  "title": "When to Send Messages",
  "sections": [{
    "title": "Overview",
    "paragraphs": [
      "Any component that desires to change the state of the map or data SHALL send out the appropriate message.  If the map application is changing state via direct user input (i.e., not in response to a CMAPI message) then the map SHALL send out the appropriate message to notify other componetns of the state change.",
      "While many channels are bi-direntional (i.e., they can be sent by a application or the map) some channels have more specific use cases.  More specific expectations for each channel are covered in the given channels description."
    ]
  },{
    "title": "Example: map.overlay.hide",
    "paragraphs": [
      "If a component wishes to set the visibility of an overlay to hidden, that component will send a map.overlay.hide message and the map will respond to the message making the overlay hidden.  The Map will not send another map.overlay.hide message as the action was completed by the map and another message would be redundant. ",
      "On the other hand, if the action to hide the overlay originates within the map application\'s user interface (i.e., the map is not responding to an external message), the map will send out a corresponding map.overlay.hide message."
    ]
  },{
    "title": "Example: map.status.view",
    "paragraphs": [
      "If a component wishes to get the map's current view state, it can send a map.status.request message specifying \"view\" as the request type.  The map will then respond with a map.status.view message.",
      " Alternatively, if the map's view is changed via direct user input(i.e, the user drags the map to a different location) the map will send a map.status.view message to notify other components that the map's view has changed."
    ]
  }]
};
