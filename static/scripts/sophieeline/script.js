// --------------------------------
//         GLOBAL VARIABLES
// --------------------------------
// Section Heights
var secE = $('#oa_eline');
var secS = $('#oa_sophie');
var divider = $('.oa_divider');
var random = randomInt(30, 70);
var otherHeight = 100 - random;

// --------------------------------
//         ON LOAD TRIGGERS
// --------------------------------


$(function() {
  // Zoetrope images get triggerd here
  zoetrope('.frame01 img');
  zoetrope('.frame02 img');
  zoetrope('.frame03 img');
  zoetrope('.frame04 img');

  window.addEventListener("deviceorientation", handleOrientation, true);

  setTimeout(function () {
    $('.notice').fadeOut(500);
  }, 4000);

  $('.oa_footnotes_btn').click(function () {
    console.log('click');
    $('.oa_footnotes').fadeToggle(300);
  })

});

function currentLocation() {
  $('.oa_landing_wrapper').click(function(){
    $('.oa_landing_wrapper').fadeOut(300);
  });
  document.cookie = "geo=true";
  // 1) hide elements
  hideElementsOnLoad();
  // 2) pull data
  useGeoLocationsToGetIonosphericdata();
  // 3) modify DOM
  // 4) show elements (with animations)
  // 5) repeat step 2

  function intervalFunc() {
    // 5) repeat
    // 2) pull data to updates
    useGeoLocationsToGetIonosphericdata()
  }
  setInterval(intervalFunc, 20000);
}

function defaultLocation() {
  $('.oa_landing_wrapper').click(function(){
    $('.oa_landing_wrapper').fadeOut(300);
  });
  document.cookie = "geo=false";
  // 1) hide elements
  hideElementsOnLoad();
  // 2) pull data
  locationError()
  // 3) modify DOM
  // 4) show elements (with animations)
  // 5) repeat step 2

  function intervalFunc() {
    // 5) repeat
    // 2) pull data to updates
    locationError()
  }
  setInterval(intervalFunc, 20000);
}

// --------------------------------
//         GYRO 🥙
// --------------------------------

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var data_point = parseFloat(document.getElementById('data_point').innerText.substring(0,5));
  var gyro = parseFloat(convertRange(Math.round(event.beta), [-180, 180], [-20, 20]));
  var height_data = parseFloat(convertRange(data_point, [0, 13], [0, 100]));
  var newNum = height_data + gyro;

  // document.getElementById('gyro').innerHTML = newNum;

    divider.css('top', newNum + 'vh');
    secE.css('height', newNum + 'vh');
    secS.css('height', (100 - newNum) + 'vh');
    secS.css('top', newNum + 'vh');

}

// function handleOrientation(event) {
//   document.getElementById('beta').innerHTML = Math.round(event.beta);
//
//   var data_point = parseFloat(document.getElementById('data_point').innerText.substring(0,5));
//   var gyro = Math.round(event.beta);
//   var newNum = data_point + gyro;
//
//   $('#data_point').html(height_data);
//   $('#gyro').html(gyro);
//
//   var height_data = convertRange(newNum, [
//     0, 13
//   ], [0, 100]);
//   divider.css('top', height_data + 'vh');
//   secE.css('height', height_data + 'vh');
//   secS.css('height', (100 - height_data) + 'vh');
//   secS.css('top', height_data + 'vh');
// }

// --------------------------------
//        FOOTER
// --------------------------------
$(function() {
  $('.oa_footer_btn').click(function(e) {
		e.preventDefault()
    $('.oa_footer_wrapper').show();
    $('.oa_footer_overlay').show();
	});

  $('.oa_footer_overlay').click(function(e) {
    e.preventDefault()
    $('.oa_footer_wrapper').hide();
    $('.oa_footer_overlay').hide();
  });
  $('#oa_f_close').click(function(e) {
    e.preventDefault()
    $('.oa_footer_wrapper').hide();
    $('.oa_footer_overlay').hide();
  });
});



//Close Modal
$(function(){
  if (document.cookie.replace(/(?:(?:^|.*;\s*)geo\s*\=\s*([^;]*).*$)|^.*$/, "$1") === "true") {
    console.log('geo true');
    // geo already accepted
    $('.oa_landing_wrapper').remove();
    currentLocation();
  } else {
    $('.oa_landing_wrapper').show();
    $('.oa_introduction').fadeIn(2000);
  }
})



$('#oa_f_close').click(function(){
  $('.oa_footer_wrapper').fadeOut(300);
});


// --------------------------------
//        MOBILE MENU
// --------------------------------
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
});

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


// --------------------------------
//        PARAGRAPH STYLES
// --------------------------------
// Text Opacity
setInterval(function() {
   $('p').each(function() {
      var textOffset = randomFloat(0.25, 1);
      $(this).animate({
         'opacity': textOffset
      }, 1000);
   });
}, 2000);


// --------------------------------
//    GEOLOCATION IONOSPHERE
// --------------------------------

function hideElementsOnLoad() {
  $('.works').hide();
  $('.data_point').hide();
  $('#data_point').hide();
}

function useGeoLocationsToGetIonosphericdata() {
  // error on older browsers
  if (!navigator.geolocation) {
    notSupportedBrowser();
    return;
  }

  // if succes getting the position get data from ionosphere
  // if error modify dom to show error
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError);

  $('#status').text('Retrieving Geolocation data...');
  $('.data').addClass('blink');
}

function notSupportedBrowser() {
  $('#status').text('Geolocation is not supported by your browser');
}

function locationSuccess(position) {
  $('#status').text('Geolocation succesfull');
  $('#status').fadeOut(0);
  $('.data').removeClass('blink');
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  $('#lat').text(latitude);
  $('#lon').text(longitude);

  var location = {
    latitude,
    longitude
  }
  request_data(location);
}

function locationError() {
  console.log('error');
  $('#status').html('Default location: Andøya Space Center');
  setTimeout(function () {
    $('#status').fadeOut(300);
  }, 4000);
  setTimeout(function () {
    $('#status').hide();
  }, 20000);
  $('#status').show();

  var latitude = 62.22;
  var longitude = 10.71;

  $('#lat').text(latitude);
  $('#lon').text(longitude);

  var location = {
    latitude,
    longitude
  }

  request_data(location);
}

function request_data(location) {
  var data = getLocationUrl(location);

  function randomIntFromInterval(min,max) {
      return (Math.random()*(max-min+1)+min);
  }
  // because shit keeps breaking
  var ionospheric_data_point = randomIntFromInterval(4,12)

  if ($(window).width() <= 1020) {
    $('#data_point').text(ionospheric_data_point.toFixed(2) + ' VTEC');
  } else {
    $('#data_point').text(ionospheric_data_point.toFixed(2) + ' VTEC');
  }

  $('#data_point').show();
      $('.data').show();


      var height_data = convertRange(ionospheric_data_point, [
        0, 13
      ], [0, 100]);

      console.log(height_data);
      divider.css('top', height_data + 'vh');
      secE.css('height', height_data + 'vh');
      secS.css('height', (100 - height_data) + 'vh');
      secS.css('top', height_data + 'vh');
      $('.oa_wrapper').fadeIn(300);

  // $.ajax({
  //   url: data.url,
  //   success: function(ionospheric_data_point) {
  //     if ($(window).width() <= 1020) {
  //       $('#data_point').text(ionospheric_data_point.substring(0, 5) + ' VTEC');
  //     } else {
  //       $('#data_point').text(ionospheric_data_point + ' VTEC');
  //     }

  //     $('#data_point').show();
  //     $('.data').show();


  //     var height_data = convertRange(ionospheric_data_point, [
  //       0, 13
  //     ], [0, 100]);

  //     console.log(height_data);
  //     divider.css('top', height_data + 'vh');
  //     secE.css('height', height_data + 'vh');
  //     secS.css('height', (100 - height_data) + 'vh');
  //     secS.css('top', height_data + 'vh');
  //     $('.oa_wrapper').fadeIn(300);
  //   },
  //   error: function(xhr, ajaxOptions, thrownError) {
  //     console.log(xhr.status);
  //     console.log(thrownError);
  //     if (thrownError) {
  //       $('#status').text('Server is not responding')
  //     }
  //   }
  // });
}

// --------------------------------
//             ZOETROPE
// --------------------------------

function zoetrope(elementID) {
  var count = 1;
  var frames;
  var scrollTimeout;
  var throttle = 80;

  $('#oa_sophie').on('scroll', function () {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function () {
        scrollTimeout = null;
        // ------------------------------------------

        frames = $(elementID)[count];
        $(elementID).removeClass('show_before');
        $(elementID).removeClass('show');
        $(elementID).removeClass('show_after');
        $($(elementID)[count - 1]).addClass('show_before');
        $($(elementID)[count]).addClass('show');
        $($(elementID)[count + 1]).addClass('show_after');
        count++;

        if (count > $(elementID).length) {
          count = 1;
        };

        // ------------------------------------------
      }, throttle);
    };
  });
};

// --------------------------------
//             BACKGROUND
// --------------------------------

(function() {
	// resize the canvas to fill browser window dynamically
	// window.addEventListener("resize", resizeCanvas, false);

	function resizeCanvas() {
		draw();
	}
	resizeCanvas();

	setInterval(function() {
		draw();
	}, 12000);
})();

function draw() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	context.fillStyle = "rgba(17,69,38, 1)";
	drawBox(0, 0, window.innerWidth, window.innerHeight); // general background
	drawBox(0, 0, window.innerWidth, window.innerHeight);

	// boxes green
	for (var i = 0; i < 10; i++) {
		drawBox(
			getRandomInt(-200, window.innerWidth - 100),
			getRandomInt(-200, window.innerHeight - 100),
			getRandomInt(200, 300),
			getRandomInt(200, 600)
		);
	}
}

function drawBox(x, y, width, height) {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	width = x + width;
	height = y + height;
	var density = (width * height) / 60;
	for (var i = 0; i < density; i++) {
		var box_x = getRandomInt(x, width);
		var box_y = getRandomInt(y, height);
		var px_width = 1;
		var px_height = 1;
		context.fillRect(box_x, box_y, px_width, px_height);
	}
}




// --------------------------------
//             UTILITIES
// --------------------------------

function getLocationUrl(location) {
  var year = moment().utc().year(); // year
  var doy = moment().utc().dayOfYear(); // day of year
  var month = pad(1 + moment().utc().month()); // month, zero index
  var day = pad(moment().utc().date()); // day
  var hour = pad(moment().subtract(30, 'minutes').utc().hour()); // hour
  var minute = pad(moment().subtract(30, 'minutes').utc().minute()); // minutes

  if (minute <= 15) {
    // 00
    minute = 00;
    minute = pad(minute)
  } else if (minute <= 30) {
    // 15
    minute = 15;
    minute = pad(minute)
  } else if (minute <= 45) {
    // 30
    minute = 30;
    minute = pad(minute)
  } else {
    // 45
    minute = 45;
    minute = pad(minute)
  }

  var lat = location.latitude;
  var lon = location.longitude;

  var url = 'proxy?url=http://gnss.be/Atmospheric_Maps/getValue.php?date=' + year + doy + month + day + hour + minute + '&lon=' + lon + '&lat=' + lat;

  var data = {
    data_point: data_point,
    url: url,
    year: year,
    doy: doy,
    month: month,
    day: day,
    hour: hour,
    minute: minute
  }

  return data;
}

function convertRange(value, r1, r2) {
  return ((value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0]).toFixed(1);
}

function pad(n) {
  return String("00" + n).slice(-2);
}


function randomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomInt(min, max) {
	return Math.floor(min + Math.random() * (max - min));
}

function randomFloat(min, max) {
   return Math.random() * (max - min) + min;
}
