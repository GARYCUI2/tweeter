
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


const createTweetElement = function(tweet) {
  const $tweet = `
  <article class="tweet">
    <header class="space_between">
      <div>
        <span>${tweet.user.name}</span>
        <span>${tweet.user.avatars}</span>
      </div>
      <span>${tweet.user.handle}</span>
    </header>
    <hr>
    <footer class="space_between">
      <span>${tweet.created_at}</span>
      <div>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
  </article>`;

  return $tweet;
};

const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    tweet.created_at = timeago.format(1473245023718);
    $('.new-tweet').append(createTweetElement(tweet));
  }

  // takes return value and appends it to the tweets container
};

$(document).ready(function() {
  renderTweets(data);
});