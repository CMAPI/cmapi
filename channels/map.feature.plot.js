cmapi.channel["map.feature.plot"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot",
    "description": "Plots feature data on the map.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, the new feature is merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "featureId": {
        "description": "Unique identifier for the given feature data. Note that feature IDs MUST be unique within a given overlay. Reusing a feature ID will be considered a reload, with the original feature data being removed and replaced by the new feature data.",
        "type": "string",
        "default": "N/A"
      },
      "name": {
        "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
        "type": "string",
        "default": "N/A"
      },
      "format": {
        "description": "Data format of the given feature. All map implementations MUST support kml and geojson.  If no format is specified, the format defaults to kml. A list of formats supported by a particular map implementation may be obtained by querying the map using the map.status channel (see map.status).",
        "type": "string",
        "default": "kml"
      },
      "feature": {
        "description": "Feature data to be loaded into the map.   See Appendix A for additional information on required KML support, Appendix B for information on required GeoJSON, and Appendix C for information on Area of Interest (AOI) support.",
        "type": [
          "object",
          "string"
        ],
        "additionalProperties": true,
        "default": "N/A"
      },
      "zoom": {
        "description": "true if map should zoom to newly loaded feature data, false if not. Default is false.",
        "type": "boolean",
        "default": false
      },
      "readOnly": {
        "description": "Valid values are true or false. If true, then the end user MUST NOT be able to edit the feature from the map’s user interface, if false the end user MAY edit the feature from the map’s user interface. Default value is true.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
        "type": "boolean",
        "default": true
      },
      "properties": {
        "additionalProperties": true,
        "description": "A free form object that can contain any additional properties the widget wants sent with this item.  Any unsupported properties on this channel should be stored in the properties object to avoid polluting the root payload of the message.  A set of optional standardized values within the properties object MAY be added in future versions.",
        "type": "object",
        "status": "new"
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string",
        "status": "new",
        "extension": "User Manipulation - Message Complete"
      },
      "menuId": {
        "description": "The id of a context menu that was registered in map.menu.create.  If populated, when the feature is right-clicked the context menu associated with this id will appear allowing the user to perform custom actions on the feature handled by the widget which registered the context menu.  If no menuId is assigned, the feature will not have a context menu associated when right-clicked.",
        "type": "string",
        "status": "new",
        "extension": "User Manipulation - Context Menus"
      }
    },
    "required": ["featureId", "feature"]
  },
  "notes": [
    'If using the channel shouter to send a feature, embedded quotes in KML MUST be escaped with a backward slash (that is, use \\" instead of ").',
    'If sending GeoJSON follow the guidance in Appendix B for style information.',
    'When plotting an Area of Interest, the format MUST be geojson AND the aoi object defined in Appendix B MUST be included as part of the GeoJSON parameters object.'
  ],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added optional messageId parameter to support user manipulation extension"
  }, {
    "version": "1.3.0",
    "change": "Added optional properties object as part of the API core"
  }, {
    "version": "1.3.0",
    "change": "Added optional menuId parameter support user manipulation extension"
  }]
};
