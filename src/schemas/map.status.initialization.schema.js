cmapi.channel["map.status.initialization"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.initialization",
    "type": "object",
    "properties": {
      "status": {
        "type": "string",
        "enum": ["init", "ready", "teardown", "mapswapinprogress"]
      }
    },
    "required": ["status"]
  }
};
