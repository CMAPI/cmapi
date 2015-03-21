cmapi.channel["map.status.initialization"].notes = ["A map notifies widgets when it is launching by sending out an 'initializing' message on the map.status.initialization channel.",
    "A map then notifies widgets when it finishes initializing and is ready to receive messages by sending out a 'ready' message over the map.status.initialization channel.",
    "Widgets should refrain sending out messages until it receives a 'ready' status over the map.status.initialization channel.",
    "A map should send a 'mapswapinprogress' message at the start of the map swap process over the map.status.initialization channel to let widgets know the map is being swapped.",
    "A widget may choose to stop sending messages after receiving a 'mapswapinprogress' until the next 'ready' is received.",
    "A widget may choose to issue a status format request after a 'mapswapinprogress'/'ready' sequence to ensure that the formats and operations required are supported in the newly swapped map engine implementation.",
    "The map core should send a 'teardown' message prior to the map widget being closed over the map.status.initialization channel to let widgets know to stop sending messages.",
    "Widgets should not send messages after receiving a 'teardown' message until it receives another 'ready' message on the map.status.initialization channel.",
    "A widget at any point in time may request a initialization status by sending the map a map.status.initialization"
  ];