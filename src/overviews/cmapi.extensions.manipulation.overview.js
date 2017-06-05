cmapi.overview["cmapi.extensions.manipulation.overview"] = {
  "title": "User Manipulation Extension",
  "sections": [{
    "title": "Overview",
    "paragraphs": [
      "This section is for both new channels and messages, as well as extensions to existing (i.e., core specification) channels and messages, that are intended to work together to support a user-oriented workflow centered on a map widget.",
      "The core specification is primarily focused supporting a workflow centered around situational awareness with limited user interactivity.  User manipulation is designed to provide a robust set of capabilities that enable interactive workflows making the relationship between an application and a map closer to the capabilities you would find when using and embedded map capability like Google Earth Plugin or OpenLayers.",
      "Examples include the user drawing, editing, and interacting with features directly on the map. It allows for chaining events via the message progress, complete, and cancel channels (e.g., do x, then do y after getting a map.message.complete event associated with x). It also allows for setting the map into a drawing or editing state, etc.",
      "Note that many of the workflows in this section are dependent on the map.message.complete, map.message.progress, and map.message.cancel messages contained within this extension.  The map.message channels enable the ability to get feedback on any message sent to the map  in the channels listed under map.message.complete and map.message.progress.  In order to use the map.message channels you MUST add an attribute to the root of the message on any of the channels (such as map.feature.plot) messageId=&quot;uuid here&quot;.  The message id will be used for any progress or complete messages sent back from the map to correlate to the original message sent. ",
      "An example of how map.message progress and complete can be useful is wanting to receive messages during a draw operation each time a point is added to a line that is being drawn by clicking on the map.  These messages would come on the map.message.progress channel with the same messageId used on the map.feature.draw message that began the draw operation.  When the user completes the draw operation, a map.message.complete message would be sent from the map with the same messageId as well.",
      "Each map.message.progress and map.message.complete payload will have a details object that is specific to the channel the original message was sent on.  The details of each of these details object is listed under the map.message.progress and map.message.complete channels.  If a channel is not listed, then map.message.progress of map.message.complete is not supported for that channel."
    ]
  },{
        "title": "Required Channels",
        "paragraphs": [
        "<a href='index.html?rf=map.message.complete#map.message.complete'>map.message.complete</a>",
        "<a href='index.html?rf=map.message.progress#map.message.progress'>map.message.progress</a>",
        "<a href='index.html?rf=map.message.cancel#map.message.cancel'>map.message.cancel</a>",
        "<a href='index.html?rf=map.feature.edit#map.feature.edit'>map.feature.edit</a>",
        "<a href='index.html?rf=map.feature.draw#map.feature.draw'>map.feature.draw</a>",
        "<a href='index.html?rf=map.feature.clicked#map.feature.clicked'>map.feature.clicked</a>",
        "<a href='index.html?rf=map.feature.mousedown#map.feature.mousedown'>map.feature.mousedown</a>",
        "<a href='index.html?rf=map.feature.mouseup#map.feature.mouseup'>map.feature.mouseup</a>",
        "<a href='index.html?rf=map.view.mousedown#map.view.mousedown'>map.view.mousedown</a>",
        "<a href='index.html?rf=map.view.area.selected#map.view.area.selected'>map.view.area.selected</a>",
        "<a href='index.html?rf=map.get#map.get'>map.get</a>",

        ]
    }]
};
