/* eslint-disable no-undef */
$(document).ready(function() {
  
  // $("#btn").on('click', function() {
  //   console.log(this); //The this keyword is a reference to the button
  // });

  let maxLength = 140;
  $('#tweet-text').keyup(function() {
    
    let length = $(this).val().length;
    let newLength = maxLength - length;
    if (newLength < 0) {
      $('output').addClass("overInput");
    }
    $('output').text(newLength);
    
  });
});