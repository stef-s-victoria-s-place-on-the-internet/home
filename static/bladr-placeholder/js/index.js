// Size Borders
var border = $('.border');
var verPos = ["b_top", "b_bottom"];
var horPos = ["b_left", "b_right"];

$(function() {
  var range = Math.floor(Math.random() * 2);
  $('.b_left').addClass(verPos[range]);
});

$(function() {
  var range = Math.floor(Math.random() * 2);
  $('.b_right').addClass(verPos[range]);
});

$(function() {
  var range = Math.floor(Math.random() * 2);
  $('.b_bot').addClass(horPos[range]);
});