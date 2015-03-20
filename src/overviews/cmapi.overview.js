cmapi.overview["cmapi.overview"] = {
	"title": "CMAPI Overview",
	"sections": [{
		"title": "Background",
		"paragraphs": [
			"Many programs and projects create applications that search for or manipulate data, then present the results on a map. The desire of Common Map API (CM API) is to provide a mechanism for which developers are able to combine data search/manipulation applications from any provider with map applications from other providers. In order to accomplish this, a standard way for the data search/manipulation applications to be able to communicate with the map applications is necessary. This Application Program Interface (API) is the codification of that standard communication mechanism."
		]
	}, {
		"title": "Overview",
		"paragraphs": [
			"Using this API allows developers to focus on the problem domain rather than implementing a map application. Developers can simply reuse an existing map application that is compliant with this API . Currently, implementations using Google Earth, Google Maps V2, Google Maps V3, and OpenLayers APIs are available, and others can be written as needed.",
			"Another benefit of this API is that it allows multiple applications to collaboratively display data on a single map rather than forcing the user to have a separate map for each application so the user does not have to learn a different map user interface.",
			"CM API was originally written to be used within the OZONE Widget Framework (OWF) inter-widget communication mechanism to allow client widgets to interact with the map. However, CM API is currently being abstracted away from its OWF specific implementation and reference implementations using standard JavaScript and HTML5 cross-domain messaging have been developed. Some optional extensions may remain specific to the OWF environment, but the core required API specification will be technology agnostic. At its core, messages are sent on channels using a pub/sub model that can easily be used outside of OWF. Messages are sent to the appropriate channels, and the map updates its state accordingly. Other applications interested in knowing the current map state can subscribe to these messages as well.",
			"It is worth noting that the map itself may publish data to these channels on occasion. For example, a map.feature.selected message may originate from an application asking that a particular feature be selected or because a user has selected the feature on the map.",
			"While in most instances the map will not echo back another message to confirm that it has performed an operation, the map will send a view status message whenever the map view (zoom/pan) has been changed, either directly by the user or by another application that sent a view change message. This allows non-map applications to be aware of the current map extent without having to process all the various messages that can change the application's state.",
			"In addition, it is expected that subsequently opened applications may wish to query the map for the current state. The API, therefore, supports applications requesting the current status so they can configure themselves appropriately."
		]
	}, {
		"title": "How to use the channels and messages",
		"paragraphs": [
			"There are two ways that the map can be manipulated. The first is by other applications via the Common Map API. The second is by a user directly manipulating the map via the map Graphical User Interface (GUI) (for example, using a drawing tool on the map).",
			"To manipulate the map, applications send messages in the map channels, and the map application responds by modifying its current state. The current map state can be modified by a data source application requesting that a Keyhole Markup Language (KML) or GeoJSON file be loaded or that the view change to some other location. The map and any listening applications react to these change requests and modify their state accordingly.",
			"When the user manipulates the map, the map will post messages to the map channels, and any application listening to the map channels can respond the changes.",
			"In other words, if a feature is selected by an application request or by a user, a map.feature.selected message is sent out to any application configured to receive the message. "
		]
	}, {
		"title": "Structure of this Document",
		"paragraphs": [
			"This document is organized into the following four major sections: Introduction, Core Specification, User Manipulation Core, and Optional Extensions.  The Introduction provides basic background information and an overview of the channels and messages, as well as provides general requirements that apply across the board for Common Map API conformance.  The Core Specification is the minimum required channels and messages that an application MUST implement in order to be considered Common Map API compliant.  The User Manipulation Core defines those channels and messages that an application MAY implement if it is to support an end-user map oriented workflow.  However, IF an application chooses to implement the User Manipulation Core it MUST implement the whole section in order to be Common Map API – User Manipulation Core compliant.  The Optional Extensions define those messages and channels that an application MAY implement if it wishes to support the identified functionality (i.e., widget intents or clustering).  Each particular extension stands on its own, so that an application may choose which particular extensions it wants to implement on an extension by extension basis.  "
		]
	}, {
		"title": "General Requirements",
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