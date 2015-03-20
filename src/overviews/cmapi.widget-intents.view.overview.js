cmapi.overview["cmapi.widget-intents.view.overview"] = {
	"title" : "Viewing Data",
	"sections": [{
		"title": "Purpose",
		"paragraphs": [
			"Visualize KML or GeoJSON feature data directly, or via URLs."
		]
	},{
		"title": "Action",
		"paragraphs": [
			"view"
		]
	}, {
		"title": "DataType",
		"paragraphs": [
			"<ul><li>application/vnd.google-earth.kml+xml</li><li>application/geo+json</li><li>uri-list/vnd.google-earth.kml+xml</li><li>uri-list/geo+json</li></ul>"
		]
	},{
		"title": "Metadata",
		"paragraphs": [
			"The following properties from the <b>map.feature.plot</b> payload: <ul><li>overlayId</li><li>featureId</li><li>name</li><li>zoom</li><li>readOnly</li></ul>"
		]
	},
	{
		"title": "Notes",
		"paragraphs": [
			"When the optional metadata is included in this intent, the receiving widget’s behavior SHOULD be the same as if a map.feature.plot message was sent (see Common Map Widget API Version 1.2 core specification for more details on the map.feature.plot message).  Although the map.feature.plot states featureId is required, featureId is optional for the plot intents.  If the featureId is not provided, the receiving map SHALL plot the feature and use a locally generated id if needed for internal tracking purposes.  If the featureId is omitted, the map SHALL NOT be required to support any of the other common map API commands such as map.feature.selected or map.feature.update that require a featureId.</p><p>When the optional metadata IS NOT included in this intent, the receiving widget’s behavior SHOULD be the same as if a map.feature.plot message was sent with the exception that the feature may not be selectable or otherwise manipulate-able via the Common Map Widget API at a later time due to the fact that there is not a featureId associated with the data being passed in."
		]
	},{
		"title": "Example - Receiving Widget",
		"paragraphs": [
			"<pre><code class=\"javascript\">OWF.Intents.receive(<br/>{ action: 'view', dataType: 'application/vnd.google-earth.kml+xml' }, <br/> function(sender, intent, data) {<br/> // check for common_map metadata <br/>if(data.common_map) {<br/>if (data.common_map.overlayId){…}<br/> if (data.common_map.featureId){…}<br/>if (data.common_map.name){…}<br/>if (data.common_map.zoom){…}<br/>    }<br/>// visualize KML in data.data<br/>};</code></pre>"
			]
	}, {
		"title": "Example - Sending Widget",
		"paragraphs": [
			"<pre><code class=\"javascript\">OWF.Intents.startActivity(<br/> { action: 'view', dataType: 'application/vnd.google-earth.kml+xml' }, <br/> { <br/>  data: '&lt?xml version=\"1.0\"?&gt&ltkml&gt…&lt/kml&gt',<br/>  common_map: {<br/>   overlayId: 'abc123',<br/>   featureId: 'def456',<br/>   name: 'My Geo Data',<br/>   zoom: true<br/>  }<br/> },<br/> function(dest) { … }<br/>);</code></pre>"
			]
	}]
};