cmapi.overview["cmapi.core.general.requirements.overview"] = {
  "title": "CMAPI Core General Requirements",
  "sections": [{
    "title": "Notation",
    "paragraphs": [
      "The key words MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL in this document, when in all capital letters, are to be interpreted as described in RFC 2119 (http://tools.ietf.org/html/rfc2119)."
    ]
  }, {
    "title": "Overlays",
    "paragraphs": [
      "By default, all data added by an individual application is placed into a single overlay unique to that application, which means one overlay per application. However, the API supports specifying into which overlay data are inserted, so an application can insert data in multiple overlays, and multiple applications can insert data into the same overlay. To prevent unintended merging of data due to multiple applications unintentionally using the same overlay ID, it is suggested that if an application needs to use multiple overlays, and no sharing of those overlays with other applications is intended, developers include the application ID as part of the overlay ID.  If an application needs to share overlays with other applications, developers SHOULD follow the guidelines in the OWF documentation regarding preference namespaces for shared overlays to avoid unintended collisions."
    ]
  }, {
    "title": "Features and Feature IDs",
    "paragraphs": [
      "Features in the context of this document refer to the discrete pieces of data passed to the API. A feature may be a single marker, polygon, or a complex feature (for example, a KML or GeoJSON Document containing many sub-features). The feature ID used by the API (featureId) refers to the feature ID given when plotting the entire feature. Sub-features also have IDs but their IDs are only used in the map.feature.selected message, which contains the ID of the lowest level feature selected (if available).  Since feature IDs are required to be unique within an overlay, it is recommended to use an approach similar to the OWF channels:  use a hierarchical naming pattern with the levels of the hierarchy separated by a dot (.). To form a unique feature ID, begin with the ID of the application creating the feature ID. Then, the application can generate a unique number to complete the feature ID. For example, if generating a feature ID from an application with the name of “army.bccs.targeter”, the feature ID’s would begin with army.bccs.targeter. See Appendix D for more information on how to generate unique IDs."
    ]
  }, {
    "title": "Payloads",
    "paragraphs": [
      "With the exception of the batch channels, all Payloads SHOULD a single message payload object.  If it is desired to send an array of message payload objects in one message event, the applicable batch channel SHOULD to be used.  For backwards compatibility, arrays on any channel MUST still be supported, however arrays on these channels should be considered deprecated.  In future versions of this specification, arrays will only be supported on the batch channels."
    ]
  },
  {
    "title": "Batch Behavior",
    "paragraphs": [
      "Batch processing allows an application to send a group of messages bundled with top level meta data.  This enables reduction of duplicate values, such as overlayId on a map.feature.plot, where 500 features are targeting the overlay.  This also allows the sending application to treat the entire batch as one message and leverage the map.message.complete to know when this batch of messages has finished processing, as well as seeing any errors raised during the processing.",
      "In previous versions of CMAPI (1.2.0 and earlier) a message payload was allowed to be either an object representing a single payload, or an array representing multiple payloads.  Beginning in CMAPI 1.2.1 developers SHOULD use the batch channels in place of arrays of payloads."
    ]
  }, {
    "title": "Latitude and Longitude",
    "paragraphs": [
      "All latitudes and longitudes are in decimal degrees. "
    ]
  }, {
    "title": "Errors",
    "paragraphs": [
      "Any message sent that is missing a required attribute SHOULD result in the map application publishing an error message on the error channel. An error is also published if the map application is unable to find an object based on the given identifier. In general, any time the map is unable to complete a requested operation, an error will be published (if possible)."
    ]
  }, {
    "title": "Case Sensitivity",
    "paragraphs": [
      "All keywords (i.e., those specifically identified in this API) in a message payload are case sensitive unless otherwise noted"
    ]
  }, {
    "title": "Coordinate Reference System",
    "paragraphs": [
      "All latitudes and longitudes MUST be in the WGS-84 Geocentric coordinate reference system (CRS) as defined in the Open Geospatial Consortium (OGC) KML Specification Section 6.2, Coordinate Reference System and Annex B, KML Coordinate Reference System Definition.  The specification can be found at http://www.opengeospatial.org/standards/kml."
    ]
  }, {
    "title": "Core API",
    "paragraphs": [
      "The channels associated with the Common Map API core specification are grouped according to the following:",
      "map.overlay channels – Messages associated with creating and manipulating overlays.",
      "map.feature channels – Messages associated with loading feature data onto the map.",
      "map.view channels – Messages associated with manipulating the map view.",
      "map.status channels – Messages associated with obtaining the current map state.",
      "map.error channels – Error messages."
    ]

  }]
};
