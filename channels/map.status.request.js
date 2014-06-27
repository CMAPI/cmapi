cmapi.channel["map.status.request"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.request",
    "description": "Request current status from the map. Map will send out requested map.status messages in response.",
    "type": "object",
    "properties": {
      "types": {
        "description": "An array of status types being requested. Currently only status types of “about,” “format,”, “selected”, and “view” are supported (future versions are expected to support a larger family of statuses, perhaps including “overlay,” “feature,” or “selected”). If types attribute is not included, all status types will be generated.",
        "type": "array",
        "uniqueItems": true,
        "items": {
          "multipleOf": ["view", "about", "format", "selected"]
        }
      }
    },
    "required": ["types"]
  },
  "notes": []
};