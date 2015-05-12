cmapi.channel["map.feature.plot.aoi"].description = {
  "description": "The Common Map Widget API supports Areas of Interest (AOIs) by extending the GeoJSON specification by adding the “aoi” object to the “Properties” object of the GeoJSON specification.  This extended object ONLY applies to the GeoJSON Feature object.  Note that when passing AOIs, the base GeoJSON object MUST be a single feature object, and MUST NOT be a Feature Collection object.",
  "properties": {
    "aoi": {
      "description": "object to be included 'inside' a GeoJSON feature to signify that the feature is an Area of Interest and is to be treated accordingly.  Note that the aoi object can only be used inside of a GeoJSON feature object to convey an Area of Interest (i.e., the aoi object will not work with KML or WMS formatted feature objects).",
      "default": "",
      "properties": {
        "buffer": {
          "description": "*CONDITIONAL <br/>Distance in meters from the points identified in the “feature” data.  MUST be included and greater than 0 if the feature is a point-radius or line, MAY be included for polygon, and SHALL be ignored for bbox. Specific interpretation of buffer based on type is spelled out in definition of “type” below. ",
          "default": ""
        },
        "type": {
          "description": "Defines how to interpret the passed in AOI geometry.  Valid values are “bbox”, “polygon”, “line”, and “point-radius”. <ul> <li>If type = “bbox”:<br/><ul><li>AOI is interpreted as a geospatial rectangle.  The bbox MUST NOT be allowed to be manipulated into a different geometric shape (e.g. a trapezoid).</li><li>geoJSON feature geometry type MUST be a polygon.</li><li>“buffer” SHALL be ignored.</li></ul></li><li>If type = “line”:<br/><ul><li>geoJSON feature geometry type MUST be a line.</li><li>“buffer” MUST be greater than 0.</li><li>“buffer” is interpreted as distance in meters perpendicular to both sides of the line.  Buffer does not extend past the start and end points of the actual line (i.e., no “end-caps” are supported). </li></ul></li><li>If type = “point-radius”:<br/><ul><li>geoJSON feature geometry type MUST be a point.</li><li>“buffer” MUST be greater than 0.</li><li>“buffer” is interpreted as the radius in meters from the point. </li></ul></li><li>If type = “polygon”:<br/><ul><li>geoJSON feature geometry type MUST be a polygon.</li><li>“buffer” MAY be included.</li><li>“buffer” is interpreted as the distance in meters outside of the polygon boundaries that the AOI is to extend. </li></ul> </ul>",
          "default": ""
        }
      }
    }
  }
};
