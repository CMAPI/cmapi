cmapi.channel["map.status.initialization"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.initialization",
    "description": "To receive notification of map events including the readiness, initialization and teardown of the map.",
    "type": "object",
    "properties": {
      "status": {
        "description": "Indicates the current state of the map.  This can be one of the following options: init, ready, teardown. <ol><li>init - means the map has been launched but is not ready to begin accepting commands.</li><li>ready -  means the map is ready to begin accepting commands.  A map will be ready once it has finished loading.</li><li>teardown - indicates the user has closed the map and it is no longer available to use.</li><li>mapswapinprogress - A map swap process has started. A 'ready' status is issued when the process completes.</li></ol>",
        "enum": ["init", "ready", "teardown", "mapswapinprogress"]
      }
    },
    "required": ["status"]
  },
  "notes": ["A map notifies widgets when it is launching by sending out an 'initializing' message on the map.status.initialization channel.",
    "A map then notifies widgets when it finishes initializing and is ready to receive messages by sending out a 'ready' message over the map.status.initialization channel.",
    "Widgets should refrain sending out messages until it receives a 'ready' status over the map.status.initialization channel.",
    "A map should send a 'mapswapinprogress' message at the start of the map swap process over the map.status.initialization channel to let widgets know the map is being swapped.",
    "A widget may choose to stop sending messages after receiving a 'mapswapinprogress' until the next 'ready' is received.",
    "A widget may choose to issue a status format request after a 'mapswapinprogress'/'ready' sequence to ensure that the formats and operations required are supported in the newly swapped map engine implementation.",
    "The map core should send a 'teardown' message prior to the map widget being closed over the map.status.initialization channel to let widgets know to stop sending messages.",
    "Widgets should not send messages after receiving a 'teardown' message until it receives another 'ready' message on the map.status.initialization channel.",
    "A widget at any point in time may request a initialization status by sending the map a map.status.initialization"
  ],
  "changeLog": [{"version": "1.3.0", "change" : "This channel is new"}]
};
