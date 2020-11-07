$(document).ready(function() {
  $('iframe').on('load', function() {
    $('iframe').contents().find("head")
      .append($('<link rel="stylesheet" href="/stedelijk/iframe.css">'));
  });
});


// $(function() {
//   function smaLoader() {
//     $('.sma_bar').each(function(i) {
//       $(this).delay(600 * i).animate({
//         opacity: 1
//       }, 700);
//     });
//
//     setTimeout(function() {
//       $('.sma_bar').animate({
//         opacity: 0
//       }, 700);
//     }, 3000);
//   }
//   smaLoader();
//   setInterval(function() {
//     smaLoader();
//   }, 3600);
// });


$(window).on('load', function() {
  $('.sma_start').fadeIn(1000);
  $('.sma_loader').removeClass('loading');
  $('.sma_loader').addClass('loaded');
});

$(function() {
  $('.sma_start').click(function() {
    $('.sma_overlay').fadeOut();
  })
})
