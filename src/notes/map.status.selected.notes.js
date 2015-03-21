cmapi.channel["map.status.selected"].notes = [
    "Within a given selectedFeature, although both selectedId and selectedName are optional, one MUST be passed in if a sub-feature is to be identified. Generally, selectedId is preferred and selectedName is used when no selectedId is available. The implication of this is that if sub-features cannot be identified, they cannot be selected.",
    "If the list of selected objects spans multiple overlays, then the payload will be an array of messages – one message for each overlay that contains selected objects."
  ];