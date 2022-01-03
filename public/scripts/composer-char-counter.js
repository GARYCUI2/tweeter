/* eslint-disable no-undef */
$(document).ready(function() {

  let maxLength = 140;
  $('#tweet-text').keyup(function() {
    
    let length = $(this).val().length;
    let newLength = maxLength - length;
    if (newLength < 0) {
      $('output').addClass("overInput");
    } else {
      $('output').removeClass("overInput");
    }
    $('output').text(newLength);
    
  });

  $('button').click(function() {
    $('output').text(maxLength);
  });
});