cmapi.channel["map.feature.plot.2525c"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.2525c",
    "type": "object",
    "required": ["format", "feature"],
    "properties": {
      "format": {
        "type": "string",
        "enum": ["2525c"]
      },
      "feature": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "feature",
        "type": "object",
        "properties": {
          "symbolCode": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": ["point", "lineString"]
          },
          "coordinates": {
            "type": "array"
          }
        },
        "required": ["symbolCode", "type", "coordinates"]
      },
      "properties": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "properties",
        "type": "object",
        "properties": {
          "modifiers": {
            "type": "object",
            "properties": {
              "size": {
                "type": "integer"
              },
              "A": {
                "type": "string"
              },
              "B": {
                "type": "string"
              },
              "C": {
                "type": "string"
              },
              "D": {
                "type": "string"
              },
              "E": {
                "type": "string"
              },
              "F": {
                "type": "string"
              },
              "G": {
                "type": "string"
              },
              "H": {
                "type": "string"
              },
              "H1": {
                "type": "string"
              },
              "H2": {
                "type": "string"
              },
              "J": {
                "type": "string"
              },
              "K": {
                "type": "string"
              },
              "L": {
                "type": "string"
              },
              "M": {
                "type": "string"
              },
              "N": {
                "type": "string"
              },
              "P": {
                "type": "string"
              },
              "Q": {
                "type": "number",
                "minimum": 0,
                "maximum": 359
              },
              "R": {
                "type": "string"
              },
              "R2": {
                "enum": ["M", "S", "U"]
              },
              "S": {
                "type": "string"
              },
              "T": {
                "type": "string"
              },
              "T1": {
                "type": "string"
              },
              "V": {
                "type": "string"
              },
              "W": {
                "type": "string"
              },
              "W1": {
                "type": "string"
              },
              "X": {
                "type": "array"
              },
              "Y": {
                "type": "string"
              },
              "AA": {
                "type": "string"
              },
              "AC": {
                "type": "string"
              },
              "AD": {
                "type": "string"
              },
              "AE": {
                "type": "number"
              },
              "AF": {
                "type": "string"
              },
              "AG": {
                "type": "string"
              },
              "AH": {
                "type": "string"
              },
              "AI": {
                "type": "string"
              },
              "AJ": {
                "type": "string"
              },
              "AK": {
                "type": "string"
              },
              "AL": {
                "type": "string"
              },
              "AM": {
                "type": "array"
              },
              "AN": {
                "type": "array"
              },
              "AO": {
                "type": "string"
              },
              "CC": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  }
};
