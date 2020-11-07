// Content Width
function contentWidth(){
  var wW = $(window).width();
  var lW = $('.oa_logo').outerWidth();
  var cW = $('.oa_content');

  // make it size well for mobile small logo
  if ($(window).width() <= 768) {
    var nW = wW - lW - 40;
  } else {
    var nW = wW - lW - 80;
  }

  var nM = wW - nW;

  cW.width(nW);
  cW.css('margin-left', nM);
}


// Functions
$(function(){
  contentWidth();
  $(window).resize(function(){
    contentWidth();
    side_notes();
  });
});


$(window).scroll(function () {
    var mypos = $(window).scrollTop();
    $("p").each(function () {
        if (mypos > $(this).offset().top - ($(window).height() - 150)) {
          $(this).animate({'opacity':'1'},300, function () {

          });
        };
    });
});


// // pixelate side_note
// $(function(){
//   $(".side_note").children().each(function () {
//     replace(this);
//   });
// });
//
// function replace(element) {
//   switch (getRandomInt(1,6)) {
//     case 1:
//       $(element).html( $(element).html().replace(/(?=(\S{0,1}\.))\S+/g,"<span class='pixelate'>$1</span>") );
//       break;
//     case 2:
//       $(element).html( $(element).html().replace(/(?=(\S{0,2}\.))\S+/g,"<span class='pixelate'>$1</span>") );
//       break;
//     case 3:
//       $(element).html( $(element).html().replace(/(?=(\S{0,3}\.))\S+/g,"<span class='pixelate'>$1</span>") );
//       break;
//     case 4:
//       $(element).html( $(element).html().replace(/(?=(\S{0,6}\.))\S+/g,"<span class='pixelate'>$1</span>") );
//       break;
//     case 5:
//       $(element).html( $(element).html().replace(/(?=(\S{0,7}\.))\S+/g,"<span class='pixelate'>$1</span>") );
//       break;
//     case 6:
//       $(element).html( $(element).html().replace(/(?=(\S{0,8}\.))\S+/g,"<span class='pixelate'>$1</span>") );
//       break;
//     default:
//   }
// }
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// position sidenotes

$(function(){
  setTimeout(function () {
    side_notes();
  }, 100);
});


function side_notes() {
  $('.oa_branch').each(function(i, obj) {
    var margin_top = $(obj).offset().top - $('.oa_content').offset().top - 20;
    $('.side_note').eq(i).css('margin-top', margin_top + 'px')
    $('.side_note:before').eq(i).css('content', "'" + i + "'")



    if (i === 1) {
        $('#move').css('margin-top', ($('#cover').outerHeight(true) + 50) + 'px')
    }
  });
}


$('#close, .oa_right_mobile').click(function() {
  $('#close').toggleClass('rotated');
  $('.oa_right').toggleClass('oa_right_show');
  $('.oa_right_mobile').toggleClass('full_height');
  $('.side_note').toggleClass('fix_margin');
  $('.side_note').show();
  $('.side_note>p').css('opacity', '1');
  $('.side_note>div').css('opacity', '1');
  $('.oa_commit_entry>p').css('opacity', '1');
  $('.side_note').fadeIn();
});

// sidenotes
// $(function(){
//   $('.side_note').each(function (i) {
//     $(this).html(i+1);
//   })
// });



// ------------ Preserve ------------ //
$(function() {
	$(".oa_preserve, .oa_footer_signup").click(function(e) {
		e.preventDefault()
    $(".oa_modal_wrapper").fadeIn(300);
	})
	$("#oa_close").click(function(e) {
		e.preventDefault()
		$(".oa_modal_wrapper").fadeOut(200)
	})
	$(".oa_modal_wrapper").click(function() {
		$(".oa_modal_wrapper").fadeOut(200);
	})
	$(".oa_modal").click(function(e) {
		e.stopPropagation();
	})
});


// ------------ Mobile Menu ------------ //
$(function() {
	$('#oa_h_plus').click(function() {
		if ($('#oa_h_plus').hasClass('rotated')) {
			$('#oa_h_plus').removeClass('rotated');
			$('.oa_mobile_menu').slideToggle();
		}
		else {
			$('#oa_h_plus').addClass('rotated');
			$('.oa_mobile_menu').slideToggle();
		}
	})
	$('#oa_notes, #oa_f_plus').click(function() {
		if ($('.oa_c_right').is(':visible') === true) {
			$('.oa_c_right, .oa_f_title').fadeOut();
			$('.oa_mobile_menu').hide();
		}
		else {
			$('.oa_c_right, .oa_f_title').fadeIn();
			$('.oa_mobile_menu').hide();
		}
	})
});
