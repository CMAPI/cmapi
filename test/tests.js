/*global cmajs, cmapi, QUnit */

QUnit.test("cmajs.utils.isArray", function (assert) {
  assert.expect(2);
  var result = cmajs.utils.isArray(["Taco", "burrito"]);
  assert.ok(result === true, "Passed!");
  result = cmajs.utils.isArray({
    frank: "rizzo",
    length: 2
  });
  assert.ok(result === false, "Passed!");
});



QUnit.test("cmapi.examples validation against schemas", function (assert) {
  var channel,
    examples,
    i,
    len,
    message,
    errorString = "",
    strict,
    channelString = "",
    channelName;

  for (channel in cmapi.channel) {
    if (cmapi.channel.hasOwnProperty(channel)) {
      //channelName = channel.replace(/\./g,'_').toUpperCase();
      //channelString += ""+channelName+": \""+channel+"\",";
      examples = cmapi.channel[channel].examples;
      if (examples !== undefined && examples !== null && cmajs.utils.isArray(examples)) {
        len = examples.length;
        for (i = 0; i < len; i++) {
          errorString = "";
          strict = false;
          if(examples[i].hasOwnProperty("strict")){
            strict = examples[i].strict;
          }
          message = cmajs.publish({
            channel: channel,
            payload: examples[i].payload,
            strict: strict
          });
          if (message.errors.length > 0) {
            errorString = message.errors[0];
          }
          assert.equal(message.valid, examples[i].valid, channel + ": Test #" + i + ": " + examples[i].title + ": " + errorString);
        }
      }
    }
  }
  //alert(channelString);
});


