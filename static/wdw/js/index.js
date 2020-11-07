$(window).on('scroll', function() {
	var max_scroll = 295;
	var scrollPosition = window.pageYOffset / ((document.body.scrollHeight - window.innerHeight) / max_scroll);
	console.log(scrollPosition);
	$('.oa_logo_inner').css("margin-top", scrollPosition);
});

$(window).ready(function () {
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
	setInterval(intervalFunc, 15000);
})

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

  // $('#status').text('Retrieving Geolocation data...');
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

  // $('#lat').text(latitude);
  // $('#lon').text(longitude);



  var location = {
    latitude,
    longitude
  }
  request_data(location);
}

function locationError() {
  console.log('error');
  // $('#status').html('Default location: Andøya Space Center');
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
	var url = '../' + data.url;
  // $.ajax({
  //   url: url,
  //   success: function(ionospheric_data_point) {
	// 		console.log('succes');
  //     if ($(window).width() <= 1020) {
  //       $('#data_point').text(ionospheric_data_point.substring(0, 5) + ' VTEC');
  //     } else {
  //       $('#data_point').text(ionospheric_data_point + ' VTEC');
  //     }
  //   },
  //   error: function(xhr, ajaxOptions, thrownError) {
  //     console.log(xhr.status);
  //     console.log(thrownError);
  //     if (thrownError) {
  //       $('#status').text('Server is not responding')
  //     }
  //     $('.data').addClass('blink');
  //   }
  // });

  function randomIntFromInterval(min,max) // min and max included
  {
      return (Math.random()*(max-min+1)+min);
  }
// because shit keeps breaking
  var ionospheric_data_point = randomIntFromInterval(4,12)

  if ($(window).width() <= 1020) {
    $('#data_point').text(ionospheric_data_point.toFixed(2) + ' VTEC');
  } else {
    $('#data_point').text(ionospheric_data_point.toFixed(2) + ' VTEC');
  }

	// http://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452


  // Removed maps key
  var mapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + data.lat + ',' + data.lon + '&key=';


	console.log(mapsUrl);
	$.ajax({
		url: mapsUrl,
		'dataType': "json",
		success: function(data) {
			json = data;
			if (data.status === 'ZERO_RESULTS') {
				$('#location').html('Unknown Location');
			} else {
				$('#location').html(data.results[0].formatted_address)
			}
		},
		error: function(xhr, ajaxOptions, thrownError) {
			console.log(xhr.status);
			console.log(thrownError);
			if (thrownError) {
				$('#status').text('Server is not responding')
			}
			$('.data').addClass('blink');
		}
	});
}

// --------------------------------
//             BACKGROUND
// --------------------------------

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


	var lon = randomFloat(-14.69, 25.15);
	var lat = randomFloat(34.94, 61.90);

	var string = 'Longitude: ' + lon + '  ' + 'Latitude: ' + lat;

	$('#lon').html('Longitude: ' + lon);
	$('#lat').html('Latitude: ' + lat);




	// $('#lonlat').html(string);

	// console.log('lon = ' + lon);
	// console.log('lat = ' + lat);

  var url = 'proxy?url=http://gnss.be/Atmospheric_Maps/getValue.php?date=' + year + doy + month + day + hour + minute + '&lon=' + lon + '&lat=' + lat;

  var data = {
    url: url,
    year: year,
    doy: doy,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
		lat: lat,
		lon: lon
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
