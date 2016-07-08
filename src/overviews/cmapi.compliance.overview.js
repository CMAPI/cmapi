cmapi.overview["cmapi.compliance.overview"] = {
    "title": "CMAPI Conformance",
    "sections": [{
        "title": "",
        "paragraphs": [
            "Conformance to the CMAPI requires, at a minimum, implementation of all if the channels and messages identified in the core specification.  ",
            "Extensions provide additional capability that compliments and extends the CMAPI core by adding new channels, and/or additional attributes to messages on existing channels. Extensions assume implementation of the core specification.  You can be CMAPI conformant without implementing any of the extensions in this section, however, IF a particular extension is implemented, it MUST be fully implemented. I.e., in order to be CMAPI conformant, if your map widget implements an extension, then your map widget MUST implement ALL of the extension and not only a part of the extension. IF an implementation only implements part of any given extension, it MUST NOT include that extension in the extensions element of a map.status.about message."
        ]

    }]
};
