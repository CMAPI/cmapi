cmapi.overview["cmapi.core.general.requirements.featureids.overview"] = {
  "title": "Features and Feature IDs",
  "sections": [{
    "title": "",
    "paragraphs": [
      "Features in the context of this document refer to the discrete pieces of data passed to the API. A feature may be a single marker, polygon, or a complex feature (for example, a KML or GeoJSON Document containing many sub-features). The feature ID used by the API (featureId) refers to the feature ID given when plotting the entire feature. Sub-features also have IDs but their IDs are only used in the map.feature.selected message, which contains the ID of the lowest level feature selected (if available).  Since feature IDs are required to be unique within an overlay, it is recommended to use an approach similar to the OWF channels:  use a hierarchical naming pattern with the levels of the hierarchy separated by a dot (.). To form a unique feature ID, begin with the ID of the application creating the feature ID. Then, the application can generate a unique number to complete the feature ID. For example, if generating a feature ID from an application with the name of “army.bccs.targeter”, the feature ID’s would begin with army.bccs.targeter. See Appendix D for more information on how to generate unique IDs."
    ]
  }]
};
