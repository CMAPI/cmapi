cmapi.channel["map.feature.plot.2525c"].description = {
  "description": "This optional extension defines the format of the map.feature.plot channel payload for MIL-STD-2525 Revision C features. The feature attibute below defines the format and content of the features attibute of the map.feature.plot. The properties.modifiers attribute defines the MIL-STD-2525 Revision C modifiers that the map implementation shall apply to the feature.",
  "properties": {
    "format": {
      "description": "Defines the feature format as a CMAPI Symbol with the specific type of MIL-STD-2525 Revision C.",
      "defaultValue": "2525c"
    },
    "feature": {
      "description": "The feature attribute of the map.feature.plot payload in GeoJSON format.",
      "defaultValue": "",
      "properties": {
        "symbolCode": {
          "description": "The 15 character MIL-STD-2525 Revision C symbol code.",
          "defaultValue": ""
        },
        "type": {
          "description": "Defines the geojson format of the coordinates in the coordinate attribute.  Polygons are not allowed for this symbol type",
          "defaultValue": "",
		  "allowableValues" : "point, lineString"
        },
        "coordinates": {
          "description": "This attribute MUST contain a valid geojson coordinate structure for the type indicated in the type attribute. See http://geojson.org/geojson-spec.html for the valid format.",
          "defaultValue": ""
        }
      }
    },
    "properties": {
      "description": "The properties attribute of the map.feature.plot payload. Which in addition to other attributes that may be present, it must contain the following attribute.",
      "defaultValue": "",
      "properties": {
        "modifiers": {
          "description": "The milstd2525 modifiers required for the graphic.",
          "defaultValue": "",
          "properties": {
            "size": {
              "description": "The pixels dimensions of a single point icon when it is drawn.  This modifier is not found in the MIL-STD-2525.",
              "defaultValue": ""
            },
            "A": {
              "description": "Symbol Icon: The innermost part of a symbol that represents a warfighting object Here for completeness, not actually used as this comes from thesymbol code.",
              "defaultValue": ""
            },
            "B": {
              "description": "Echelon: Symbol Icon: A graphic modifier in a unit symbol that identifies command level We feed off of the symbol code so this isn't used.",
              "defaultValue": ""
            },
            "C": {
              "description": "Quantity: A text modifier in an equipment symbol that identifies the number of items present.",
              "defaultValue": ""
            },
            "D": {
              "description": "Task Force Indicator: A graphic modifier that identifies a unit or SO symbol as a task force (see 5.3.4.6 and figures 2 and 3).",
              "defaultValue": ""
            },
            "E": {
              "description": "Frame Shape Modifier: A graphic modifier that displays standard identity, battle dimension, or exercise amplifying descriptors of an object (see 5.3.1 and table II).",
              "defaultValue": ""
            },
            "F": {
              "description": "Reinforced / Reduced: A text modifier in a unit symbol that displays (+) for reinforced, (-) for reduced,(+) reinforced and reduced. R : reinforced, D : reduced, RD : reinforced and reduced",
              "defaultValue": ""
            },
            "G": {
              "description": "Staff Comments: A text modifier for units, equipment and installations, content is implementation specific.",
              "defaultValue": ""
            },
            "H": {
              "description": "Additional Info: Text modifier for amplifying free text.",
              "defaultValue": ""
            },
            "H1": {
              "description": "Additional Info 2: Text modifier for amplifying free text.",
              "defaultValue": ""
            },
            "H2": {
              "description": "Additional Info 3: Text modifier for amplifying free text.",
              "defaultValue": ""
            },
            "J": {
              "description": "Evaluation Rating: A text modifier for units and installations that indicates unit effectiveness or installation capability.",
              "defaultValue": ""
            },
            "K": {
              "description": "Combat Effectiveness: A text modifier for hostile equipment, “!” indicates detectable electronic signatures.",
              "defaultValue": ""
            },
            "L": {
              "description": "Signature Equipment: A text modifier for hostile equipment, “!” indicates detectable electronic signatures.",
              "defaultValue": ""
            },
            "M": {
              "description": "Higher Formation: A text modifier for units that indicates number or title of higher echelon command (corps are designated by Roman numerals).",
              "defaultValue": ""
            },
            "N": {
              "description": "Hostile: A text modifier for equipment, letters ENY denote hostile symbols. Always set to ENY",
              "defaultValue": ""
            },
            "P": {
              "description": "IFF/SIF: A text modifier displaying IFF/SIF Identification modes and codes.",
              "defaultValue": ""
            },
            "Q": {
              "description": "Direction of Movement: A graphic modifier for CBRN events that identifies the direction of movement (see 5.5.2.1 and figure 11).",
              "defaultValue": ""
            },
            "R": {
              "description": "Mobility Indicator: A graphic modifier for equipment that depicts the mobility of an object (see 5.3.4.3, figures 2 and 3, and table VI). We feed off of the symbol code for mobility so this isn't used.",
              "defaultValue": ""
            },
            "R2": {
              "description": "Signature Mobility Indicator: M : Mobile, S : Static, or U : Uncertain.",
              "defaultValue": ""
            },
            "S": {
              "description": "Headquaters or Staff Offest Indicator: Headquarters staff indicator: A graphic modifier for units, equipment, and installations that identifies a unit as a headquarters (see 5.3.4.8 and figures 2 and 3). Offset location indicator: A graphic modifier for units, equipment, and installations used when placing an object away from its actual location (see 5.3.4.9 and figures 2 and 3).",
              "defaultValue": ""
            },
            "T": {
              "description": "Unique Designation 1: A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology.",
              "defaultValue": ""
            },
            "T1": {
              "description": "Unique Designation 2: A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology.",
              "defaultValue": ""
            },
            "V": {
              "description": "Equipment Type: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).",
              "defaultValue": ""
            },
            "W": {
              "description": "Date Time Group 1: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).",
              "defaultValue": ""
            },
            "W1": {
              "description": "Date Time Group 2: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).",
              "defaultValue": ""
            },
            "X": {
              "description": "Altitude Depth: An array of numbers for units, equipment, and installations, that displays either altitude flight level, depth for submerged objects, or height of equipment or structures on the ground. See 5.5.2.5 for content.",
              "defaultValue": ""
            },
            "Y": {
              "description": "Location: A text modifier for units, equipment, and installations that displays a symbol’s location in degrees, minutes, and seconds (or in UTM or other applicable display format). Conforms to decimal degrees format: xx.dddddhyyy.dddddh where xx : degrees latitude yyy : degrees longitude .ddddd : decimal degrees h : direction (N, E, S, W).",
              "defaultValue": ""
            },
            "AA": {
              "description": "Special C2 Headquarters: A text modifier for units, indicator is contained inside the frame (see figures 2 and 3), contains the name of the special C2 Headquarters.",
              "defaultValue": ""
            },
            "AC": {
              "description": "Installation: Installation: A graphic modifier for units, equipment, and installations used to show that a particular symbol denotes an installation (see 5.3.4.5 and figures 2 and 3). Not used, we feed off of symbol code for this.",
              "defaultValue": ""
            },
            "AD": {
              "description": "Platform Type: ELNOT or CENOT.",
              "defaultValue": ""
            },
            "AE": {
              "description": "Equipment Teardown Time: Equipment teardown time in minutes.",
              "defaultValue": ""
            },
            "AF": {
              "description": "Common Identifier: Example: “Hawk” for Hawk SAM system.",
              "defaultValue": ""
            },
            "AG": {
              "description": "Auxillery Equipment Identifier: Towed sonar array indicator: A graphic modifier for equipment that indicates the presence of a towed sonar array (see 5.3.4.4, figures 2 and 3, and table VII).",
              "defaultValue": ""
            },
            "AH": {
              "description": "Area of Uncertainty: A graphic modifier for units and equipment that indicates the area where an object is most likely to be, based on the object’s last report and the reporting accuracy of the sensor that detected the object (see 5.3.4.11.1 and figure 4).",
              "defaultValue": ""
            },
            "AI": {
              "description": "Dead Reckoning Trailer: A graphic modifier for units and equipment that identifies where an object should be located at present, given its last reported course and speed (see 5.3.4.11.2 and figure 4).",
              "defaultValue": ""
            },
            "AJ": {
              "description": "Speed Leader: A graphic modifier for units and equipment that connects two objects and is updated dynamically as the positions of the objects change (see 5.3.4.11.4 and figure 4).",
              "defaultValue": ""
            },
            "AK": {
              "description": "Pairing Line: An optional graphic modifier for equipment or installations that indicates operational condition or capacity.",
              "defaultValue": ""
            },
            "AL": {
              "description": "Operation Condition: A graphic amplifier placed immediately atop the symbol. May denote, 1) local/remote status, 2) engagement status, and 3) weapon type.",
              "defaultValue": ""
            },
            "AM": {
              "description": "Distance: An array of numeric modifiers that displays a minimum, maximum, or a specific distance (range, radius, width, length, etc.), in meters. 0 - 999,999 meters",
              "defaultValue": ""
            },
            "AN": {
              "description": "Azimuth: An array of numbers between 0 to 359. For Tactical Graphics A numeric modifier that displays an angle measured from true north to any other line in degrees.",
              "defaultValue": ""
            },
            "AO": {
              "description": "Engagement Bar: A graphic amplifier placed immediately atop the symbol. May denote, 1) local/remote status, 2) engagement status, and 3) weapon type.",
              "defaultValue": ""
            },
            "CC": {
              "description": "Country Code: Used internally by the renderer.  This value is set via the 13th & 14th characters in the symbol id.  There is no formal definition of how this should be indicated on the symbol in the MilStd or USAS.   The renderer will place it to the right of the 'H' label.",
              "defaultValue": ""
            }
          }
        }
      }
    }
  }
};
