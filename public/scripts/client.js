/* eslint-disable no-undef */
/* eslint-disable camelcase */

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet) {
  const $tweet = `
  <article class="tweet">
    <header class="space_between">
      <div>
        <img src=${tweet.user.avatars}>
        <span>${tweet.user.name}</span>
        
      </div>
      <span>${tweet.user.handle}</span>
    </header>
    <span>${tweet.content.text}</span>
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

  const reverseTweets = tweets.reverse();

  // loops through tweets
  for (let tweet of reverseTweets) {
    // calls createTweetElement for each tweet
    tweet.created_at = timeago.format(tweet.created_at);
    $('#tweets-container').append(createTweetElement(tweet));
  }
};

$(document).ready(function() {
  //submit function
  loadtweets();

  $("form").submit(function(event) {
    // prevent default behavior
    event.preventDefault();

    //input validation
    const textInput = $("#tweet-text").val();

    if (textInput.length > 140 || textInput === null || textInput === "") {
      alert("You type too much or too less bro!!!!!");
      return;
    }
    
    // get serialized form fata
    let data = $(this).serialize();

    // post tweets
    postTweets(data);
  });
});

const postTweets = (postData) => {
  $.ajax('/tweets', { method: 'POST', data: postData })
    .then(() => {
      loadtweets();
    })
    .fail(function(error) {
      console.log("Error in submit:", error);
    });
};

const clearTweets = function() {
  $('#tweets-container').empty();

};

const loadtweets = function() {
  $.ajax('/tweets', { method: 'GET'})
    .then((tweetData) => {
      clearTweets();
      renderTweets(tweetData);
    })
    .fail(function(error) {
      console.log("Error in loadTweets:", error);
    });

};