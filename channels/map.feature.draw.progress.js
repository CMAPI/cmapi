cmapi.channel["map.feature.draw.progress"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.draw.progress",
    "description": "Schema for the details object for a map.message.progress message during a map.feature.draw.",
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
        "type": {
          "description": "Type of feature to be drawn.  Options are line, polygon, point or symbol.  This field may be overloaded to handle future draw types such as bufferedline, circle, aoi, etc.",
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
  },
  "notes": [
    "This is the format of the details object to be used in a map.message.progress event for feature drawing."
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This details object is new"
  }]
};
