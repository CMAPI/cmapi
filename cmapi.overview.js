cmapi.overview = {
	"sections" : [
		{
			"title" : "Background",
			"paragraphs" : [
				"Many programs and projects create widgets that search for or manipulate data then present the results on a map. The desire is to be able to combine data search/manipulation widgets from any provider with map widgets from other providers. In order to accomplish this, a standard way for the data search/manipulation widgets to be able to communicate with the map widget is necessary. This Application Program Interface (API) is the codification of that standard. "
				]
		},
		{
			"title" : "Overview",
			"paragraphs" : [
				"Using this API allows developers to focus on the problem domain rather than implementing a map widget themselves. It also allows the actual map implementation used to be chosen dynamically by the user at runtime rather than being chosen by the developer. Any map implementation that applies this API can be used. Currently, implementations using Google Earth, Google Maps V2, Google Maps V3, and OpenLayers APIs are available, and others can be written as needed.",
				"Another benefit of this API is that it allows multiple widgets to collaboratively display data on a single map widget rather than forcing the user to have a separate map for each widget so the user does not have to learn a different map user interface for each widget.",
				"The API uses the OZONE Widget Framework (OWF) inter-widget communication mechanism to allow client widgets to interact with the map. Messages are sent to the appropriate channels (defined below), and the map updates its state accordingly. Other widgets interested in knowing the current map state can subscribe to these messages as well.",
				"It is worth noting that the map itself may publish data to these channels on occasion. For example, a map.feature.selected message may originate from a widget asking that a particular feature be selected or because a user has selected the feature on the map.",
				"While in most instances the map will not echo back another message to confirm that it has performed an operation, the map will send a view status message whenever the map view (zoom/pan) has been changed, either directly by the user or by another widget that sent a view change message. This allows non-map widgets to be aware of the current viewport without having to process all the various messages that can change the non-map widget's state.",
				"In addition, it is expected that subsequently opened widgets may wish to query the map for the current state. The API, therefore, supports widgets requesting the current status so they can configure themselves appropriately."
			]
		},
		{
			"title" : "How to use the channels and messages",
			"paragraphs" : [
				"There are two ways that the map can be manipulated. The first is by other widgets via the Common Map Widget API. The second is by a user directly manipulating the map via the map Graphical User Interface (GUI) (for example, using a drawing tool on the map).",
				"To manipulate the map, widgets send messages in the map channels, and the map widget responds by modifying its current state. The current map state can be modified by a data source widget requesting that a Keyhole Markup Language (KML) or GeoJSON file be loaded or that the view change to some other location. The map and any listening widgets react to these change requests and modify their state accordingly.",
				"When the user manipulates the map, the map will post messages to the map channels, and any widget listening to the map channels can respond the changes.",
				"In other words, if a feature is selected by a widget request or by a user, a map.feature.selected message is sent out to any widget configured to receive the message. "
			]
		},
		{
			"title" : "Structure of this Document",
			"paragraphs" : [
				"This document is organized into the following four major sections: Introduction, Core Specification, User Manipulation Core, and Optional Extensions.  The Introduction provides basic background information and an overview of the channels and messages, as well as provides general requirements that apply across the board for Common Map Widget API conformance.  The Core Specification is the minimum required channels and messages that a widget MUST implement in order to be considered Common Map Widget API conformant.  The User Manipulation Core defines those channels and messages that a widget MAY implement if it is to support an end-user map oriented workflow.  However, IF a widget chooses to implement the User Manipulation Core it MUST implement the whole section in order to be Common Map Widget API – User Manipulation Core conformant.  The Optional Extensions define those messages and channels that a widget MAY implement if it wishes to support the identified functionality (i.e., widget intents or clustering).  Each particular extension stands on its own, so that a widget may choose which particular extensions it wants to implement on an extension by extension basis.  "
			]
		},
		{
			"title" : "General Requirements",
			"paragraphs" : [
				"The key words MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL in this document, when in all capital letters, are to be interpreted as described in RFC 2119 (http://tools.ietf.org/html/rfc2119)."
			]
		},
		{
			"title" : "Overlays",
			"paragraphs" : [
				"By default, all data added by an individual widget is placed into a single overlay unique to that widget, which means one overlay per widget. However, the API supports specifying into which overlay data are inserted, so a widget can insert data in multiple overlays, and multiple widgets can insert data into the same overlay. To prevent unintended merging of data due to multiple widgets unintentionally using the same overlay ID, it is suggested that if a widget needs to use multiple overlays, and no sharing of those overlays with other widgets is intended, developers include the widget ID as part of the overlay ID.  If a widget needs to share overlays with other widgets, developers SHOULD follow the guidelines in the OWF documentation regarding preference namespaces for shared overlays to avoid unintended collisions."
			]
		},
		{
			"title" : "Features and Feature IDs",
			"paragraphs" : [
				"Features in the context of this document refer to the discrete pieces of data passed to the API. A feature may be a single marker, polygon, or a complex feature (for example, a KML or GeoJSON Document containing many sub-features). The feature ID used by the API (featureId) refers to the feature ID given when plotting the entire feature. Sub-features also have IDs but their IDs are only used in the map.feature.selected message, which contains the ID of the lowest level feature selected (if available).  Since feature IDs are required to be unique within an overlay, it is recommended to use an approach similar to the OWF channels:  use a hierarchical naming pattern with the levels of the hierarchy separated by a dot (.). To form a unique feature ID, begin with the ID of the widget creating the feature ID. Then, the widget can generate a unique number to complete the feature ID. For example, if generating a feature ID from a widget with the name of “army.bccs.targeter”, the feature ID’s would begin with army.bccs.targeter. "
			]
		},
		{
			"title" : "Payloads",
			"paragraphs" : [
				"All Payloads can be either a single object or an array of like objects."
			]
		},
		{
			"title" : "Latitude and Longitude",
			"paragraphs" : [
				"All latitudes and longitudes are in decimal degrees. "
			]
		},
		{
			"title" : "Errors",
			"paragraphs" : [
				"Any message sent that is missing a required attribute SHOULD result in the map widget publishing an error message on the error channel. An error is also published if the map widget is unable to find an object based on the given identifier. In general, any time the map is unable to complete a requested operation, an error will be published (if possible)."
			]
		},
		{
			"title" : "Case Sensitivity",
			"paragraphs" : [
				"All keywords (i.e., those specifically identified in this API) in a message payload are case sensitive unless otherwise noted"
			]
		},
		{
			"title" : "Coordinate Reference System",
			"paragraphs" : [
				"All latitudes and longitudes MUST be in the WGS-84 Geocentric coordinate reference system (CRS) as defined in the Open Geospatial Consortium (OGC) KML Specification Section 6.2, Coordinate Reference System and Annex B, KML Coordinate Reference System Definition.  The specification can be found at http://www.opengeospatial.org/standards/kml."
			]
		},
		{
			"title" : "Core API",
			"paragraphs" : [
				"The channels associated with the Common Map Widget API core specification are grouped according to the following:",
				"map.overlay channels – Messages associated with creating and manipulating overlays.",
				"map.feature channels – Messages associated with loading feature data onto the map.",
				"map.view channels – Messages associated with manipulating the map view.",
				"map.status channels – Messages associated with obtaining the current map state.",
				"map.error channels – Error messages."

		}
	]
}