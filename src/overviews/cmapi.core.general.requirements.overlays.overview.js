cmapi.overview["cmapi.core.general.requirements.overlays.overview"] = {
  "title": "Overlays",
  "sections": [{
    "title": "",
    "paragraphs": [
      "By default, all data added by an individual application is placed into a single overlay unique to that application, which means one overlay per application. However, the API supports specifying into which overlay data are inserted, so an application can insert data in multiple overlays, and multiple applications can insert data into the same overlay. To prevent unintended merging of data due to multiple applications unintentionally using the same overlay ID, it is suggested that if an application needs to use multiple overlays, and no sharing of those overlays with other applications is intended, developers include the application ID as part of the overlay ID.  If an application needs to share overlays with other applications, developers SHOULD follow the guidelines in the OWF documentation regarding preference namespaces for shared overlays to avoid unintended collisions."
    ]
  }]
};
