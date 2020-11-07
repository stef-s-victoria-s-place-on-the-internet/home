$(document).ready(function() {
  var locations = [
    'https://www.oneacre.online/?id=lisa-stimuleringsfonds-J1541248969078', 
    'https://www.oneacre.online/?id=sophieeline-stimuleringsfonds-I1541252124421',
    'https://www.oneacre.online/?id=karina-stimuleringsfonds-D1541252022930',
    'https://www.oneacre.online/?id=ingrid-stimuleringsfonds-O1541251596681',
    'http://www.oneacre.online/announcement'
  ];
  var len = locations.length;
  var iframe = $('#iframe');
  var i = 0;


  setInterval(function() {
    console.log('change');
    iframe.attr('src', locations[++i % len]);
  }, 70000);
});
