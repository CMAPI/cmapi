cmapi.channel["map.get"].description = {
  "description": "The map.get channel enables queries for the existence and state of overlays and feature data on the map.  The query language is fairly simple - You can specifiy the type of object(s) you are looking for via the types property, specify the properties of those objects you are interested in, and then specifiy filter criteria based on property name and property values.",
  "properties": {
    "recursive": {
      "description": "Determines whether the query will drill down into sub overlays and features. Recursive should be used carefully as recursing for all features from the root level of the map may result in unpredicatbly large responses.",
      "defaultValue": false
    },
    "types": {
      "description": "An array or either overlays or features. For example ['features'], ['overlays'], ['features','overlays']",
      "defaultValue": ""
    },
    "select": {
      "description": "An array of the properties you want returned on the overlay and/or features results of the query.  For example if you provide ['visible'] you will get a list of results with the item's featureId, overlayId, and visible property only.  This works similar to a SQL select statement where the property names of the object are used instead of a column anme in a table.  An empty or null select statement will act as a select all and return the full objects with all properties.",
      "defaultValue": ""
    },
    "filter": {
      "description": "An array of terms to use a filter criteria for on the overlays and features that will be returned.  See the map.feature.plot and map.overlay.add channels for definitions of the properties which can be used as filters.",
      "defaultValue": "",
      "properties": {
        "property": {
          "description": "This field must contain the name of the property field which value must match the value in the term property.",
          "defaultValue": ""
        },
        "term": {
          "description": "This field must contain the value to match. Type checking is performed. ('10' !== 10)",
          "defaultValue": ""
        }
      }
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
      "defaultValue": ""
    }
  },
  "required" : ["messageId", "types"]
};
