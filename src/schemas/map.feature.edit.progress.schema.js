cmapi.channel["map.feature.edit.progress"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.progress Details object",
    "description": "Schema for the details object for a map.message.progress message during a map.feature.edit.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The id of the overlay the feature that is to be edited.",
        "type": "string"
      },
      "featureId": {
        "description": "The unique identifier for the feature to be edited. ",
        "type": "string"
      },
      "properties": {
        "description": "A properties object defining the appearance of the graphic being drawn",
        "type": "object"
      },
      "feature": {
        "type": "object",
        "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute"
      },
      "format": {
        "type": "string",
        "description": "Type of feature data based on the map.feature.plot type"
      },
      "status": {
        "description": "A pre-defined string indicating the type of progress. <ul><li>start - indicates that the map has placed the feature into edit mode.</li><li>update - indicates that the map has modified the feature.</li></ul>",
        "enum": ["start", "update"]
      },
      "updates": {
            "type": "object",
            "description": "This object contains the details of the changes made during the draw operation.",
            "properties": {
                "type":{
                    "enum": ["add", "update", "remove"],
                    "description": "This field identifies the operation performed."
                },
                "indices":{
                    "type": "array",
                    "items":{
                        "type": "integer"
                    },
                    "additionalItems": true,
                    "description": "This field is an array of integer indexes identifying the coordinates affected. This array can be empty if the operation applies to property other than a coordinate."
                },
                "coordinates":{
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "lat":{
                                "type": "number",
                                "maximum": 90.0,
                                "minimum": -90.0,
                                "description": "The latitude component of the coordinate."
                            },
                            "lon":{
                                "type": "number",
                                "maximum": 180.0,
                                "minimum": -180.0,
                                "description": "The longitude component of the coordinate."
                            },
                            "alt":{
                                "type": "number",
                                "description": "The optional altitude component of the coordinate."
                            }
                        }
                    },
                    "additionalItems": true,
                    "description": "This field is an array of all the objects coordiantes. Each coordinate object is as follows {lat: number, lon: number, [alt: number]}."
                }
            }
        }
    },
    "required": ["featureId", "overlayId"]
  }
};
