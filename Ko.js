

var login = require("facebook-chat-api");

// Create simple echo bot
login({email: "tanapast_007@hotmail.com", password: "0806355986"}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {

      if(message.body === "ไปโกดังกัน") {
        var msg = {body: "ok อาบน้ำแปป 15นาที เจอหน้าโก"};
        api.sendMessage(msg, message.threadID);
      }
      else {
        api.listen(function callback(err, message) {
        api.sendMessage(message.body, message.threadID);
    });
      }

    });

});
