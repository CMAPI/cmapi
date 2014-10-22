cmapi.channel["map.feature.draw.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.draw.",
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
      "coordinates": {
        "type": "array",
        "description": "Array of objects which represent vertice locations associated with the object drawn. Each object in the array is of the form {lat: number, lon: number, [alt: number]}."
      }
    },
    "required": ["featureId", "overlayId"]
  },
  "notes": [
    "This is the format of the details object to be used in a map.message.complete event for feature drawing."
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This details object is new"
  }]
};
