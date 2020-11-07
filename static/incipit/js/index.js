$(function() {
	if (navigator.userAgent.indexOf('Safari') != -1) {
		$(".card").addClass("safari");
	}
});

$(window).on('scroll', function() {
	var max_scroll = 295;
	var scrollPosition = window.pageYOffset / ((document.body.scrollHeight - window.innerHeight) / max_scroll);
	$('.oa_logo_inner').css("margin-top", scrollPosition);
});

//Define the player
var player = document.getElementById('audio');
//play when play is clicked
$('#play').click(function() {
	player.play()
})

//pause when pause clicked
$('#pause').click(function() {
	player.pause()
})

$(document).ready(function () {
	$('.card').click(function() {
		$('.front').toggleClass('fontToggle');
		$('.back').toggleClass('backToggle');
	});
})

//UPDATE PROGRESS BAR
function updateProgress() {
	var progress = $("#progressIn");
	var value = 0;

	//If duration = infinity set value to 100

	if (player.duration == 'Infinity') {
		value =//else if it is > 0 calculate percentage to highlight

		100;
	} else if (player.currentTime > 0) {
		value = Math.floor((100 / player.duration) * player.currentTime);
	}

	//set the width of the progress bar

	progress.stop().css({
		'width': value + '%'
	}, 500)

	//set the new timestamp
	$('#time').html(formatTime(player.currentTime))
}

// add event listener for audio time updates
player.addEventListener("timeupdate", updateProgress, false);

//Format the audio tag's time stamp
function formatTime(seconds) {
	minutes = Math.floor(seconds / 60);
	minutes = (minutes >= 10)
		? minutes
		: "" + minutes;
	seconds = Math.floor(seconds % 60);
	seconds = (seconds >= 10)
		? seconds
		: "0" + seconds;
	return minutes + ":" + seconds;
}
