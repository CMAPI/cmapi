cmapi.overview["cmapi.changelog"] = {
  "title": "CMAPI 1.3.0 Change Log",
  "sections": [{
    "title": "Changes",
    "paragraphs": [
      "There are no changes between CMAPI 1.2.0 and 1.3.0 that break backwards compatibility. There are some behaviors that have been deprecated that will require changes in a future version of CMAPI and break backwards compatibility.  Please see the deprecation section for more details.",
      "A section for Runtime Extensions has been added which indicates CMAPI related behavior in a particular runtime such as Ozone Widget Framework.  These extensions should be followed when developing a solution that will use CMAPI in the listed runtimes.  The goal of this is to eliminate any runtime specific functionality from the core specification so it can be used in any runtime that supports pub / sub messaging.",
      "Feature data formats for the map.feature channels was previously listed in the CMAPI appendeies.  The data formats now have their own section titled map.feature Data Formats and the appendice letters have subsequently changed for the remaining appendicies.",
      "The documentation for each channel is now generated from JSON schema files.  These same JSON schemas can be used to validate CMAPI message payload objects.  At the bottom of each channel definition there is an example payload that will validate via the schema for that channel.  This validation can also be used in your application.  See the section title Validating CMAPI messages for more information."
    ]
  }, {
    "title": "Additions",
    "paragraphs": [
      "Added new batch channels for map.feature.plot.batch, map.feature.unplot.batch, map.feature.selected.batch, map.feature.deselected.batch.  these cahnnels are inteded to be used in place of sending an array of payloads, which is now a deprecated",
      "Added the map.status.initialization channel which provides indication when a map is available to receive messages",
      "Added definitions for symbology feature types including MIL-STD-2525B and MIL-STD 2525C",
      "Added recomendation to use UUID's for all ids.  This can be found in the overview page.",
      "Added User Manipulation Extension which adds capabilities including feature drawing, feature editing, feature click events, context menus, and message complete callbacks",
      "A new properties object was added to many channels as a free form object container for addtional attributes to send with a message payload without polluting the root level of the payload object"
    ]
  }, {
    "title": "Deprecation",
    "paragraphs": [
      "Sending arrays of payloads is no longer recomended and the batch channels should be used instead.  Please see <a href='index.html#cmapi.core.general.requirements.overview'>CMAPI Core General Requirements</a> for more details",
      "Using a widgets sender.id as a default for an overlayId is now deprecated in all cases.  It is recomended that a value always be sent for the overlayId property on any channel.  In future versions overlayId will likely become a required property."
    ]
  }]
};
