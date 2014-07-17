cmapi.channel["map.drag-drop"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "OWF Drag and Drop",
    "description": "Drop an item on the map. See OWF drag drop API for details.",
    "type": "object",
    "properties": {
      "dragDropData": {
        "description": "Container for the drap drop data",
        "type": "object",
        "required": ["featureId"],
        "properties": {
          "overlayId": {
            "type": "string",
            "description": "The ID of the overlay the dropped item should be loaded into. If overlay with this ID already exists, new item is merged into existing overlay; otherwise, new overlay will be created. If no overlayId is included, sending widget’s ID is used."
          },
          "featureId": {
            "type": "string",
            "description": "Unique identifier for the dropped feature. Note that feature IDs MUST be unique within a given overlay. Reusing a feature ID will be considered a reload, with the original feature data being removed and replaced by the new feature data."
          },
          "name": {
            "type": "string",
            "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only."
          },
          "zoom": {
            "type": "boolean",
            "description": "true if map should zoom to newly loaded feature or marker data, false if not.  Default is false.",
            "default": false
          },
          "marker": {
            "type": "object",
            "description": "A JSON object containing information with which to create a new marker on the map.",
            "properties": {
              "details": {
                "type": "string",
                "description": "Detail text associated with the item that will appear in an info window."
              },
              "iconUrl": {
                "type": "string",
                "description": "URL to an icon that represents this dropped item on the map. If no URL is included, a default icon is used."
              }
            }
          },
          "featureUrl": {
            "type": "object",
            "description": "A JSON object containing feature data to be plotted on the map.",
            "properties": {
              "format": {
                "type": "string",
                "default": "kml",
                "description": "Data format (http header content type) of the given feature. If no format is specified, the format defaults to “kml.” A list of formats supported by a particular map implementation can be obtained by querying the map using the map.status channel (see map.status).  Note that for this version of the Common Map Widget API, all map implementations MUST support KML and GeoJSON."
              },
              "url": {
                "type": "string",
                "description": "URL from which to retrieve the feature data to load onto the map."
              },
              "params": {
                "type": "object",
                "description": "A JSON object containing a list of parameters to be passed to the server along with the URL when loading WMS data. Params object is ignored unless “format” is set to ”wms.” Note that request, exceptions, SRS/CRS, width, height, and bbox params SHOULD not be passed in as they are determined by the map as needed and will be ignored if passed. Params as passed will be concatenated to the URL and are expected to follow the WMS specification.   All parameters passed in MUST NOT be URL encoded (the map widget implementation will URL encode all passed in params)."
              }
            }
          },
          "feature": {
            "type": "object",
            "description": "A JSON object containing feature data to be plotted on the map.",
            "properties": {
              "format": {
                "type": "string",
                "default": "kml",
                "description": "Data format (http header content type) of the given feature. If no format is specified, the format defaults to “kml.” A list of formats supported by a particular map implementation can be obtained by querying the map using the map.status channel (see map.status).  Note that for this version of the Common Map Widget API, all map implementations MUST support KML and GeoJSON."
              },
              "featureData": {
                "type": "object",
                "description": "Feature data to be loaded into the map (see Appendices A and B for additional information on KML and GeoJSON data)."
              }
            },
            "required": ["format", "featureData"]
          }
        }
      }
    }
  },
  notes: [
    'Although marker, feature, and featureUrl are optional, one MUST be present. If marker is included, the marker will be placed at the location of the drop. Feature and featureUrl data will be placed at their natural location (equivalent to being loaded using map.feature.plot.* message).'
  ]
};