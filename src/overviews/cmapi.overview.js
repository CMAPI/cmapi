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
			"To manipulate the map, applications send messages in the map channels, and the map application responds by modifying its current state. The current map state can be modified by a data source application requesting that an <a href='http://www.opengeospatial.org/standards/kml/' target='_blank'>OGC KML</a> or <a href='http://geojson.org/' target='_blank'>GeoJSON</a> file be loaded or that the view change to some other location. The map and any listening applications react to these change requests and modify their state accordingly.",
			"When the user manipulates the map, the map will post messages to the map channels, and any application listening to the map channels can respond the changes.",
			"In other words, if a feature is selected by an application request or by a user, a map.feature.selected message is sent out to any application configured to receive the message. "
		]
	}/*, {
		"title": "Structure of this Document",
		"paragraphs": [
			"This document is organized into the following four major sections: Introduction, Core Specification, User Manipulation Core, and Optional Extensions.  The Introduction provides basic background information and an overview of the channels and messages, as well as provides general requirements that apply across the board for Common Map API conformance.  The Core Specification is the minimum required channels and messages that an application MUST implement in order to be considered Common Map API compliant.  The User Manipulation Core defines those channels and messages that an application MAY implement if it is to support an end-user map oriented workflow.  However, IF an application chooses to implement the User Manipulation Core it MUST implement the whole section in order to be Common Map API – User Manipulation Core compliant.  The Optional Extensions define those messages and channels that an application MAY implement if it wishes to support the identified functionality (i.e., widget intents or clustering).  Each particular extension stands on its own, so that an application may choose which particular extensions it wants to implement on an extension by extension basis.  "
		]
	}*/]
};