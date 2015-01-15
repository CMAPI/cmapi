cmapi.channel["map.status.request"].examples = [{
  "title": "Send a status request",
  "description": "",
  "valid": true,
  "payload": {
    "types": [
      "view",
      "about",
      "format",
      "selected"
    ]
  }
}, {
  "title": "Send a status request with a typo for types",
  "description": "",
  "valid": false,
  "strict": true,
  "payload": {
    "typo": [
      "view",
      "about",
      "format",
      "selected"
    ]
  }
},  {
  "title": "Send a status request with a wrong type",
  "description": "",
  "valid": false,
  "payload": {
    "types": [
      "all",
      "about",
      "format",
      "selected"
    ]
  }
}];