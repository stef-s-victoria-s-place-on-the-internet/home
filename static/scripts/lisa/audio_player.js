window.onload = function() {

  var myAudio = document.getElementById('my-audio');
  var play = document.getElementById('play');
  var pause = document.getElementById('pause');
  var loading = document.getElementById('loading');
  var bar = document.getElementById('bar');
  var time = document.getElementById('time');

  function displayControls() {
    loading.style.display = "none";
    play.style.display = "block";
  }

  // check that the media is ready before displaying the controls
  if (myAudio.paused) {
    displayControls();
  } else {
    // not ready yet - wait for canplay event
    myAudio.addEventListener('canplay', function() {
      displayControls();
    });
  }

  play.addEventListener('click', function() {
    myAudio.play();

    path($('#my-audio').attr('class'));

    play.style.display = "none";
    pause.style.display = "block";
  });

  pause.addEventListener('click', function() {
    myAudio.currentTime = 0;
    clearTimeout(timer);
    myAudio.pause();
    pause.style.display = "none";
    play.style.display = "block";
  });

  // display progress

  myAudio.addEventListener('timeupdate', function() {
    //sets the percentage
    bar.style.width = parseInt(((myAudio.currentTime / myAudio.duration) * 100), 10) + "%";
    time.innerHTML = formatSeconds(Math.floor(myAudio.currentTime));
  });

  var progress = document.getElementById('progress');

  progress.addEventListener('click', function(e) {

    // calculate the normalized position clicked
    var clickPosition = (e.pageX - this.offsetLeft) / this.offsetWidth;
    var clickTime = clickPosition * myAudio.duration;

    // move the playhead to the correct position
    myAudio.currentTime = clickTime;
  });
};

function formatSeconds(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
}

function path(el) {
  switch (el) {
    case 'jacob':
      timePush({
        time: 0,
        el: 'x19-y18'
      }, {
        time: 31000,
        el: 'x19-y19'
      }, {
        time: 50000,
        el: 'x18-y21'
      }, {
        time: 82000,
        el: 'x17-y20'
      }, {
        time: 37000,
        el: 'x18-y20'
      })
      break;
    case 'marit':
      timePush({
        time: 22000,
        el: 'x27-y16'
      }, {
        time: 66000,
        el: 'x22-y18'
      }, {
        time: 112000,
        el: 'x23-y17'
      }, {
        time: 26000,
        el: 'x18-y21'
      }, {
        time: 15000,
        el: 'x24-y17'
      }, {
        time: 55000,
        el: 'x27-y19'
      });
      break;
    case 'aleid':
      timePush({
        time: 0,
        el: 'x19-y19'
      }, {
        time: 137000,
        el: 'x21-y10'
      }, {
        time: 62000,
        el: 'x27-y13'
      }, {
        time: 49000,
        el: 'x21-y13'
      }, {
        time: 57000,
        el: 'x32-y18'
      });
      break;
    default:

  }
}