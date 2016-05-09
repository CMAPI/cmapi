cmapi.overview["cmapi.core.general.requirements.payloads.overview"] = {
  "title": "Payloads",
  "sections": [{
    "title": "",
    "paragraphs": [
      "With the exception of the batch channels, all Payloads SHOULD a single message payload object.  If it is desired to send an array of message payload objects in one message event, the applicable batch channel SHOULD to be used.  For backwards compatibility, arrays on any channel MUST still be supported, however arrays on these channels should be considered deprecated.  In future versions of this specification, arrays will only be supported on the batch channels."
    ]
  }]
};
