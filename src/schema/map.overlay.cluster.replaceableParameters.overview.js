cmapi.overview["map.overlay.cluster.replaceableParameters"] = {
	"title" : "Clustering: Replaceable Parameters",
	"sections": [{
		"title": " ",
		"paragraphs": [
			"When clustering multiple features into a single feature, it is important to allow the clustered feature to contain style and information from the features in the cluster. As requirements evolve, additional replaceable values and functionality will be added to this document to cover all supported features.",
			"Replacement currently requires the value sent in the map.overlay.cluster.set channel to be expressed as a string so it can be evaluated by the map. These replaceable parameters are represented using the following syntax, ${param} where param represents the name of the replaceable parameter from the following list:",
			"ParameterName = <b>count</b>; Parameter Description = The number of features in the clustered feature."
			
		]
	}]
};