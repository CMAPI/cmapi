cmapi.overview["cmapi.core.general.requirements.batch.overview"] = {
  "title": "Batch Behavior",
  "sections": [{
    "title": "",
    "paragraphs": [
      "Batch processing allows an application to send a group of messages bundled with top level meta data.  This enables reduction of duplicate values, such as overlayId on a map.feature.plot, where 500 features are targeting the overlay.  This also allows the sending application to treat the entire batch as one message and leverage the map.message.complete to know when this batch of messages has finished processing, as well as seeing any errors raised during the processing.",
      "In previous versions of CMAPI (1.2.0 and earlier) a message payload was allowed to be either an object representing a single payload, or an array representing multiple payloads.  Beginning in CMAPI 1.2.1 developers SHOULD use the batch channels in place of arrays of payloads."
    ]
  }]
};
