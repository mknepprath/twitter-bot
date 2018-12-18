const twit = require("twit");
const config = require("./config.js");

const Twitter = new twit(config),
  tweetData = ["tweet1", "tweet2", "tweet3"];

const now = new Date(),
  start = new Date(now.getFullYear(), 0, 0),
  diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000,
  day = Math.floor(diff / (1000 * 60 * 60 * 24));

const tweet = quote => {
  Twitter.post("statuses/update", { status: quote }, function(err, response) {
    if (err) {
      console.log("oh no, there was an error");
    } else {
      console.log(`tweeted ${quote}`);
    }
  });
};

const init = tweetData => {
  tweet(tweetData[day - 1]);
};

init(tweetData);
