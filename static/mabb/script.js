$(document).ready(function() {
  var locations = ['http://www.oneacre.online/?id=ingrid-11063038879836561', 'http://www.oneacre.online/announcement', 'http://www.oneacre.online/'];
  var len = locations.length;
  var iframe = $('#iframe');
  var i = 0;


  setInterval(function() {
    console.log('change');
    iframe.attr('src', locations[++i % len]);
  }, 700000);
});
