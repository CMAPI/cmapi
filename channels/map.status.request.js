cmapi.channel["map.status.request"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.request",
    "description": "Request current status from the map. Map will send out requested map.status.xyz messages in response.",
    "type": "object",
    "properties": {
      "types": {
        "description": "An array of status types being requested. Map widgets MUST support status types of “about,” “format,”, “selected”, “view”, <span class=\"updatedContent\">and “initialization” </span>by responding with the applicable status message (e.g., map.status.about, map.status.format, map.status.selected and/or map.status.view). If the types attribute is not included, all status messages MUST be generated.",
        "type": "array",
        "default": "N/A",
        "uniqueItems": true,
        "anyOf": ["view", "about", "format", "selected", "initialization"]
      }
    },
    "required": []
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added “initialization” as a request option"
  }]
};
