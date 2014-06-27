cmapi.channel["map.status.selected"].examples = [{
  "title": "Send out the list of currently selected features",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "selectedFeatures": [{
      "featureId": "example.mapWidget.1",
      "selectedId": "example.mapWidget.1.1"
    }, {
      "featureId": "example.mapWidget.1",
      "selectedId": "example.mapWidget.1.2"
    }, {
      "featureId": "example.mapWidget.2",
      "selectedId": "example.mapWidget.2.1"
    }]
  }
},
{
  "title": "Currently selected features missing featureId",
  "description": "",
  "valid": false,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "selectedFeatures": [{
      "featureId": "example.mapWidget.1",
      "selectedId": "example.mapWidget.1.1"
    }, {
      "selectedId": "example.mapWidget.1.2"
    }, {
      "featureId": "example.mapWidget.2",
      "selectedId": "example.mapWidget.2.1"
    }]
  }
}];