cmapi.overview["cmapi.extensions.overview"] = {
  "title": "CMAPI Extensions",
  "sections": [{
    "title": "Overview",
    "paragraphs": [
      "This section provides details on optional extensions to the CMAPI core specification.  Extensions add addtional capability that compliments and extends the CMAPI core by adding new channels, and additonal attributes to messages on existing channels.  In order to use extensions, you MUST first implement all of the CMAPI core spec.  Note that each of the extensions in this section are optional (i.e., you can be CMAPI conformant without implementing any of the extensions in this section).  However, IF a particular extension is implemented, it MUST be fully implemented.  I.e., in order to be CMAPI conformant, if your map widget implements extension <xyz>, then your map widget MUST implement ALL of extension <xyz> and not only part of the extension.  IF an implementation only implements part of any given extension, it MUST NOT include that extension in the extensions element of a map.status.about message."
    ]
  }]
};
