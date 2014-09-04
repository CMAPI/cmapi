cmapi.channel["map.feature.edit.progress"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.edit.progress",
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
        "updates": {
            "type": "object",
            "description": "This object contains the details of the changes made during the draw operation.",
            "properties": {
                "type":{
                    "type": "enum",
                    "enum": ["add", "update", "remove"],
                    "description": "This field identifies the operation performed."
                },
                "indices":{
                    "type": "array",
                    "description": "This field is an array of integer indexes identifying the coordinates affected. This array can be empty if the operation applies to property other than a coordinate."
                },
                "coordinates":{
                    "type": "array",
                    "description": "This field is an array of all the objects coordiantes. Each coordinate object is as follows {lat: number, lon: number, [alt: number]}."
                }
            }
        }
    },
    "required": ["featureId", "overlayId"]
  },
  "notes": [
    "This is the format of the details object to be used in a map.message.progress event for feature editing."
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This details object is new"
  }]
};
