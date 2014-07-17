cmapi.overview["cmapi.widget-intents.pick.overview"] = {
	"title": "Picking a Map widget",
	"sections": [{
		"title": "Purpose",
		"paragraphs": [
			"Pick a widget that supports a specific version of the Common Map Widget API. This intent is useful for callers to obtain the GUID of an API compatible widget, for further Common Map Widget API related interaction via directed messaging (i.e., between two specific widgets vice broadcast to all)."
		]
	}, {
		"title": "Action",
		"paragraphs": [
			"pick"
		]
	}, {
		"title": "DataType",
		"paragraphs": [
			"<ul><li>application/vnd.owf.common-map-1.0</li><li>application/vnd.owf.common-map-1.1</li><li>application/vnd.owf.common-map-1.2</li></ul>",
			"When performing a “pick”, a widget should ask for the lowest possible version of the Common Map Widget API that is needed to accomplish its desired functionality in order to ensure the widest possible selection of widgets to pick from."
		]
	}, {
		"title": "Metadata",
		"paragraphs": [
			"none"
		]
	}, {
		"title": "Example - Receiving Widget",
		"paragraphs": [
			"<pre><code class=\"javascript\">OWF.Intents.receive(<br/>  { action: 'pick', dataType: 'application/vnd.owf.common-map-1.0' }, <br/>  function(sender, intent, data) {<br/>    // no-op<br/>}<br/>);</code></pre>",
			"In the OWF.Intents.recieve, the receiver of the intent SHOULD NOT take any action as a result of the intent.  This is to maintain a common user experience when implementing the pick intent"
		]
	}, {
		"title": "Example - Sending Widget",
		"paragraphs": [
			"<pre><code class=\"javascript\">OWF.Intents.startActivity(<br/>  { action: 'pick', dataType: 'application/vnd.owf.common-map-1.0’ }, <br/>  { },<br/>  function(dest) { … }<br/>);</code></pre>",
			"In OWF.Intents.startActivity, the payload SHOULD be empty (i.e., no actual data is conveyed in the map widget pick intent).  An example use case that this supports is for an end user to connect a specific data widget with a specific map widget for further directed communications via the Common Map Widget API. "
		]
	}]
};