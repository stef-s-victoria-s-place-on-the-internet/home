$(function() {
  $('.ma_container_oa').click(function() {
    $('.ma_container_oa').toggleClass('open');
  });
});


$('.l_w').scroll(function() {
  progress();
})

function progress() {
  let el = document.querySelector('.l_w')
  var winScroll = el.scrollTop;
  var height = el.scrollHeight - el.clientHeight;
  var scrolled = (winScroll / height) * 100;
  $('.progress-bar').css("width", scrolled + "%");
}