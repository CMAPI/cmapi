cmapi.clustering = {
	overview: {
		"sections": [{
			"title": "Background",
			"paragraphs": [
				"The goal of the Common Map Widget API (CMAPI) is to enable a uniform interface for map widget implementations to make core map capabilities available to everyone. To that end, the initial specification supports the OWF Eventing and Drag & Drop APIs as two means of communicating geospatial data to a map.",
				"However, some widgets plot thousands of features onto the map, which can degrade the user experience and lead poor map performance.  In order to remedy these issues, maps can cluster results into a single feature on the map as shown in Figure 1 below.",
				"<img src='img/cmapi.clustering.figure1.jpg'></img>",
				"The CMAPI Technical Committee has decided to support clustering of results onto the map via an optional extension to the core CMAPI specification.  This document defines the optional clustering extension to the CMAPI core specification. Currently, this extension supports clustering multiple features into a single point feature styled using CSS color values or an icon URL. Support for additional clustering features will be added in future versions of the extension to CMAPI.",
				"Note that clustering rules are applied at the overlay level.  If it is desired to separate items into different clustering rules, then the elements should be separated into different overlays and the appropriate clustering rule set for each specific overlay."
			]
		}]
	}
}