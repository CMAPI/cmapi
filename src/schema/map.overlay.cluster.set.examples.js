cmapi.channel["map.overlay.cluster.set"].examples = [{
  "title": "Point example",
  "description": "",
  "valid": true,
  "payload": {
    "threshold": 3,
    "distance": 40,
    "clusterStyle": {
      "label": "Clustered Point 1",
      "title": "Clustered Point 1",
      "summary": "A sample summary",
      "pointStyle": {
        "color": {
          "r": 0,
          "g": 255,
          "b": 0,
          "a": 0.25
        },
        "radius": 6
      }
    },
    "overlayId": "BattlePlan2"
  }
}, {
  "title": "Icon example",
  "description": "",
  "valid": true,
  "payload": {
    "threshold": 3,
    "distance": 40,
    "clusterStyle": {
      "label": "Clustered Point 1",
      "title": "Clustered Point 1",
      "summary": "A sample summary",
      "iconStyle": {
        "url": "http://www.cmapi.org/test.png"
      }
    },
    "overlayId": "BattlePlan2"
  }
}, {
  "title": "Replaceable Radius",
  "description": "",
  "valid": true,
  "payload": {
    "threshold": 3,
    "distance": 40,
    "clusterStyle": {
      "label": "Clustered Point 1",
      "title": "Clustered Point 1",
      "summary": "A sample summary",
      "pointStyle": {
        "color": {
          "r": 0,
          "g": 255,
          "b": 0,
          "a": 0.25
        },
        "radius": "Math.min(${count}, 7) + 3"
      }
    },
    "overlayId": "BattlePlan2"
  }
}, {
  "title": "Replaceable Radius",
  "description": "",
  "valid": true,
  "payload": {
    "threshold": 3,
    "distance": 40,
    "clusterStyle": {
      "label": "Clustered Point 1",
      "title": "Clustered Point 1",
      "summary": "A sample summary",
      "iconStyle": {
        "url": "http://www.cmapi.org/${count}.png"
      }
    },
    "overlayId": "BattlePlan2"
  }
}];