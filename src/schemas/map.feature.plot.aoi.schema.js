cmapi.channel["map.feature.plot.aoi"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.aoi",
    "description": "The Common Map Widget API supports Areas of Interest (AOIs) by extending the GeoJSON specification by adding the “aoi” object to the “Properties” object of the GeoJSON specification.  This extended object ONLY applies to the GeoJSON Feature object.  Note that when passing AOIs, the base GeoJSON object MUST be a single feature object, and MUST NOT be a Feature Collection object.",
    "type": "object",
    "required": ["aoi"],
    "properties": {
      "aoi": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "aoi",
        "description": "If included in a GeoJSON feature, signifies the feature is an Area of Interest and is to be treated accordingly.  Note that only GeoJSON features can be used to convey Areas of Interest.",
        "type": "object",
        "properties": {
          "buffer": {
            "type": "number",
            "description": "*CONDITIONAL <br/>Distance in meters from the points identified in the “feature” data.  MUST be included and greater than 0 if the feature is a point-radius or line, MAY be included for polygon, and SHALL be ignored for bbox. Specific interpretation of buffer based on type is spelled out in definition of “type” below. ",
            "minimum": 1
          },
          "type": {
            "type" : "string",
            "enum": ["bbox", "polygon", "line", "point-radius"],
            "description": "Defines how to interpret the passed in AOI geometry.  Valid values are “bbox”, “polygon”, “line”, and “point-radius”. <ul> <li>If type = “bbox”:<br/><ul><li>AOI is interpreted as a geospatial rectangle.  The bbox MUST NOT be allowed to be manipulated into a different geometric shape (e.g. a trapezoid).</li><li>geoJSON feature geometry type MUST be a polygon.</li><li>“buffer” SHALL be ignored.</li></ul></li><li>If type = “line”:<br/><ul><li>geoJSON feature geometry type MUST be a line.</li><li>“buffer” MUST be greater than 0.</li><li>“buffer” is interpreted as distance in meters perpendicular to both sides of the line.  Buffer does not extend past the start and end points of the actual line (i.e., no “end-caps” are supported). </li></ul></li><li>If type = “point-radius”:<br/><ul><li>geoJSON feature geometry type MUST be a point.</li><li>“buffer” MUST be greater than 0.</li><li>“buffer” is interpreted as the radius in meters from the point. </li></ul></li><li>If type = “polygon”:<br/><ul><li>geoJSON feature geometry type MUST be a polygon.</li><li>“buffer” MAY be included.</li><li>“buffer” is interpreted as the distance in meters outside of the polygon boundaries that the AOI is to extend. </li></ul> </ul>"
          }

        },
        "required": ["type"]
      }
    }
  } 
};