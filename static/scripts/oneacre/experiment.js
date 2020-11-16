var oaLogo = $('.oa_logo');
var oaLogoInner = $('.oa_logo_inner');

// ------------ footer scroll stickyness ------------ //
function footerPosition() {
	footerPositionOnLoad = $('.oa_footer').position().top + $('.oa_footer').outerHeight(true);
	return footerPositionOnLoad;
}


var footerPositionOnLoad;
$(window).ready(function() {
	footerPosition();
});

$(window).resize(function() {
	footerPosition();
})

var logoAllowedToScroll = true;

$(window).scroll(function() {
	var scrollPosition = $(document).scrollTop();
	if (scrollPosition + $(window).height() >= footerPositionOnLoad) {
		logoAllowedToScroll = false; // stop logo from scrolling if below footer

		if ($(window).width() >= 600) {
			$('.oa_footer').addClass('oa_footer_fixed');
			$('.attempts').addClass('auto_height');
		}

	}
	else {
		logoAllowedToScroll = true; // start when above footer
		$('.oa_footer').removeClass('oa_footer_fixed');
		$('.attempts').removeClass('auto_height');
	}
});





// ------------ ------------ ------------ ------------ ------------ ------------ ------------ ------------  //
// controllers for the sticky line
// ------------ ------------ ------------ ------------ ------------ ------------ ------------ ------------  //

// ------------ Run functions on page load ------------ //
$(document).ready(function() {
	locationOfAttemptsElement();
	midOfLines()
});

// ------------ Run functions wile scrolling ------------ //
var didScroll = false;

window.onscroll = doThisStuffOnScroll;

function doThisStuffOnScroll() {
	didScroll = true;
}

var allowed_to_scroll = true;

setInterval(function() {
	if (didScroll) {
		didScroll = false;
		// limitClonedLine()
		if ($('.attempts').isOnScreen() && allowed_to_scroll) {
			changeElementHeightOnScroll();
			$('.attempts').height(height_scrolled() + 1000);
			if ($(window).scrollTop() > locationOfAttemptsElement()) {
				cloneNew_line();
				$('#fixed_element').show();
				$('.distance_counter').html(Math.round(height_scrolled()));
				scroll_limit();
			}
			else {
				$('#fixed_element').hide();
			}
		}
	}
}, 1);

$(window).resize(function() {
	moveFixedLine();
});



// ------------ ------------ ------------ ------------ ------------ ------------ ------------ ------------  //
// functions for the sticky line
// ------------ ------------ ------------ ------------ ------------ ------------ ------------ ------------  //
// ------------ Add the id to middle line ------------ //
function midOfLines() {
	var obj = $('.line').length;
	if ($('.line').length >= 2) {
		var mid = parseInt(obj) / 2;
		mid = Math.round(mid);
		$('<div class="line" id="new_line"><span class="distance_counter"></span></div>').insertAfter($('.line')[mid]);
	}
	else {
		$('.attempts').append('<div class="line" id="new_line"><span class="distance_counter"></span></div>');
	}
}

// ------------ Check the location on page of the .attempts element ------------ //
function locationOfAttemptsElement() {
	var elementOffset = $('.attempts').offset().top;
	return elementOffset;
}


// ------------ Check if on screen ------------ //
$.fn.isOnScreen = function() {
	var win = $(window);
	var viewport = {
		top: win.scrollTop(),
		left: win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();
	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();
	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};




// ------------ Make element fixed ------------ //
function cloneNew_line() {
	if ($('.fixed').length > 0) {
		return;
	}
	else if ($('#new_line').height() >= 300) {
		$('#new_line').clone().appendTo('.attempts').addClass('fixed').attr('id', 'fixed_element');
		$('.fixed').height(300);
		$('#new_line').find('.distance_counter').hide();
		moveFixedLine();
	}
}

function moveFixedLine() {
	var left = $('#new_line').offset().left;
	$('#fixed_element').css('left', left);
}


function changeElementHeightOnScroll() {
	$('#new_line').height(height_scrolled());
}

var most_distance_scrolled = 0;
// allow the line only to grow
function height_scrolled() {
	var distance_scrolled = $(window).scrollTop();
	distance_scrolled = distance_scrolled - $('.attempts').offset().top + 300;
	if (most_distance_scrolled <= distance_scrolled) {
		most_distance_scrolled = distance_scrolled;
		return most_distance_scrolled;
	}
	else {
		return most_distance_scrolled;
	}
};


// ------------ Limit scrolling after a certain amount of scrolling  ------------ //
function scroll_limit() {
	clearTimeout($.data(this, 'scrollTimer'));
	$.data(this, 'scrollTimer', setTimeout(function() {
		allowed_to_scroll = false;
		$('#fixed_element').remove();
		$('.distance_counter').show();
		$('.distance_counter').css('color', '#551A8B');
		$('.attempts').css('height', 'auto');
		$('.distance_counter').parent().css('background-color', '#551A8B');
		sendJSON();
	}, 1200));
};


// ------------ Send data in json to POST req  ------------ //
function sendJSON() {
	var line_distance = $('.distance_counter').text()
	if (parseInt(line_distance) >= 300) {
    // TODO: update hostname to API subdomain
		$.ajax({
			url: 'https://api.oneacre.online/api/v2/announcement/line',
			type: 'POST',
			cache: false,
			data: {
				'line_distance': line_distance,
				'date': new Date()
			},
			success: function(data) {
				// success
				// console.log(data);
			},
			error: function(jqXHR, textStatus, err) {
				console.log('text status ' + textStatus + ', err ' + err);
			}
		})
	}
};


// ------------ ------------ ------------ ------------ ------------ ------------ ------------ ------------  //
// loading the page properly
// ------------ ------------ ------------ ------------ ------------ ------------ ------------ ------------  //

// ------------ Set db_line heights ------------ //
$(document).ready(function() {
	var db_line = $('.db_line');
	db_line.each(function() {
		var int = parseInt($(this).html());
		$(this).parent().height(int);
	});
});

// ------------ Reload page as not to break the scrolly thing ------------ //
$(window).on('beforeunload', function() {
	$(window).scrollTop(0);
});
