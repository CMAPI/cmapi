cmapi.overview["cmapi.widget-intents.overview"] = {
	"title" : "Widget Intents",
	"sections": [{
		"title": "Background",
		"paragraphs": [
			"The goal of the Common Map Widget API is to enable a uniform interface for map widget implementations to make core map capabilities available to everyone. To that end, the initial specification supports the OWF Eventing and Drag & Drop APIs as two means of communicating geospatial data to a map.",
			"With the introduction of the Widget Intents API to the OWF platform, there is a powerful new way to perform inter-widget communication in a manner that gives the user more choice and power. The Widget Intents extension to the Common Map Widget API addresses some fundamental restrictions of the Eventing-based core API. ",
			"Also, since widget intents is modeled after Android intents, it was determined by the Common Map Widget API Technical Committee that following a similar pattern of viewing and plotting appropriate mime types would be in order.  Although the “picking a common map widget” intent is unique to the Common Map Widget API, the view and plot of KML, KML URLs,  GeoJSON, and GeoJSON URLs is more generic in nature and not specific to the Common Map Widget API – and follows the already existing pattern in Android intents.  The Common Map Widget API unique addition to that is the optional common_map metadata object."
		]
	}, {
		"title": "Intents Payloads",
		"paragraphs": [
			"In keeping with best practices regarding OWF message payloads, Intents payloads should always be an Object, with a property called <b>data</b> that contains the literal data of the type described by the <b>dataType</b> property of the intent. For example:",
			"<pre><code class=\"javascript\">OWF.Intents.startActivity({<br/> action: \"view\",<br/> dataType: \"application/vnd.google-earth.kml+xml\" <br/>},<br/> {<br/> data: &lt\"?xml version=\"1.0\"?&gt&ltkml&gt…&lt\kml&gt\" <br>},<br>function(dest) {<br/> … <br/>});</pre></code>",
			"This approach also allows for the distribution of <i>always optional</i> metadata. For the Common Map Widget API, the property containing this metadata is <b>common_map</b>. This property is used to group metadata that is specifically related to the Common Map Widget API, reduce possible conflicts, and avoid polluting the top-level payload object (which is not specific to the Common Map Widget API). For example:",
			"<pre><code class=\"javascript\">OWF.Intents.startActivity({<br/> action: 'view',<br/> dataType: 'application/vnd.google-earth.kml+xml' <br/>},<br/> {<br/> data: \"&lt?xml version=\"1.0 \"?&gt&ltkml&gt…&lt/kml&gt\",<br/> common_map: {<br/> overlayId: 'abc123',<br/> featureId: 'def456',<br/> name: 'My KML', <br/> zoom: true <br/>},<br/> function(dest) {<br/> … <br/>});</pre></code>",
			"For each intent defined below, the properties identified in the <b>metadata</b> section are intended to go into the <b>data.common_map</b> object.  The identified properties are defined in the Common Map Widget API core specification, and a reference to the payload they are defined in is provided in the text.  Note that there is a potential inconsistency here between the fact that the metadata object <b>data.common_map</b> is optional, but some of the properties within the <b>data.common_map</b> object are defined as “required” in the Common Map Widget API core spec.  In these cases, when the <b>data.common_map</b> object is not sent with the given intent, the features being viewed or plotted may not be accessible to the other Common Map Widget API functions (e.g., via a map.feature.selected event)."
		]
	}]
};