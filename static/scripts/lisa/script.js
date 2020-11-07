$(window).on('load', function () {
  $('.sma_start').fadeIn(1000)
  $('.sma_loader').removeClass('loading')
  $('.sma_loader').addClass('loaded')
})

$(function () {
  $('.sma_start').click(function () {
    $('.sma_overlay').fadeOut()
  })
})

// minimap

$(function () {
  $('.ma_post').each(function () {
    var el = $('svg ' + '.' + $(this).attr('id'))
    el.css('fill', '#D0D2D3')
    // el.css('fill', '#000');
  })

  document
    .querySelector('.ma_wrapper')
    .addEventListener('scroll', function (e) {
      const pageHeight = $('.ma_background').height()
      const pageWidth = $('.ma_background').width()
      const posX = Math.abs($('.ma_background').position().left)
      const posY = Math.abs($('.ma_background').position().top)

      const percentHeight = (100 / pageHeight) * posY
      const percentWidth = (100 / pageWidth) * posX

      const minimapHeight = $('.ma_minimap').height()
      const minimapWidth = $('.ma_minimap').width()
      const minimapTop = minimapHeight * (percentHeight / 100)
      const minimapLeft = minimapWidth * (percentWidth / 100)

      $('#minimap_screen').css('top', minimapTop)
      $('#minimap_screen').css('left', minimapLeft)
    })
})

// on load scroll to post
$(function () {
  var random_position = Math.floor(Math.random() * $('.ma_post').length)
  var random_post = $($('.ma_post')[random_position]).attr('id')
  scrollToElInstant(random_post)
})

$(function () {
  if (window.outerWidth <= 640) console.log('mobile!')
})

$(function () {
  $('.ma_container_oa').click(function () {
    $('.ma_container_oa').toggleClass('open')
  })

  $('.oa_mobile_header').click(function () {
    $('.ma_container_oa').toggleClass('open_mobile')
  })
})

$(function () {
  $('.ma_post').each(function () {
    var id = $(this).attr('id')
    $('#ma_select').append('<option value="' + id + '">' + id + '</option>')
  })

  $('#ma_select').change(function () {
    scrollToEl($(this).val())
  })
})

function scrollToEl(el) {
  document.getElementById(el).scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })
}

function scrollToElInstant(el) {
  console.log(el);
  document.getElementById(el).scrollIntoView({
    behavior: 'instant',
    block: 'center',
    inline: 'center',
  })
}

function animateProgressbar(time) {
  $('.ma_soundwalk-timer-progress-bar').animate(
    {
      width: '100%',
    },
    time,
    function () {
      // Animation complete.
      $('.ma_soundwalk-timer-progress-bar').css('width', '0%')
    }
  )
}

var timer
async function timePush(...arr) {
  // console.log('init');

  function delay(t) {
    return new Promise((resolve, reject) => {
      timer = setTimeout(() => {
        resolve()
      }, t)
    })
  }
  //for the length of this array run a delay
  //then log, you could always use a callback here
  for (let i of arr) {
    // console.log('start?');
    $('#ma_soundwalk-timer-progress-position-next').html(i.el)
    animateProgressbar(i.time)
    //pass the items delay to delay function
    await delay(i.time)
    scrollToEl(i.el)
    $('#ma_soundwalk-timer-progress-position-current').html(i.el)
    // console.log(i.el);
    // console.log('finish?');
  }
}

function isElementInViewport(el) {
  //special bonus for those using jQuery
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0]
  }

  var rect = el.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  )
}

function onVisibilityChange(el, callback) {
  var old_visible
  return function () {
    var visible = isElementInViewport(el)
    if (visible != old_visible) {
      old_visible = visible
      if (typeof callback == 'function') {
        callback()
      }
    }
  }
}

// Select Post on hover
$(function () {
  // Hover Animate
  $('.ma_wrapper').scroll(function () {
    setTimeout(function () {
      mark_post()
    }, 2000)
  })
})

function mark_post() {
  $('.ma_post').each(function () {
    if (isElementInViewport($(this))) {
      if ($(this).hasClass('selected') === false) {
        // Add Class
        $(this).toggleClass('selecting')
        // Animate Loader
        $(this)
          .find('.ma_select')
          .animate(
            {
              width: '100%',
            },
            2000,
            function () {
              $('.selecting').addClass('selected')
              $('.selecting').toggleClass('selecting')
              var el = $(this).closest('.ma_post').attr('id')
              $('svg ' + '.' + el).css('fill', '#ff4713')
            }
          )
        // Move Source
        $(this).find('.source').animate(
          {
            margin: '30px 30px 35px 30px',
          },
          200
        )
      }
    }
  })
}

// Adaptive Height Text Container
$(function () {
  $('.ma_text').each(function () {
    var headerHeight = $(this).parent().find('h3').outerHeight(true)
    var sourceHeight = $(this).parent().find('.source').outerHeight(true)
    $(this).height(568 - headerHeight - sourceHeight)
  })
})

// Walks Interface
$(function () {
  $('#ma_walks').click(function () {
    if ($('.w_selector').hasClass('w_hidden')) {
      $('.w_button').each(function (i) {
        $(this)
          .delay(100 * i)
          .fadeIn(250)
      })
      $('.w_selector').removeClass('w_hidden')
      $('#ma_walks').addClass('w_active')
    } else {
      $('.w_button').each(function (i) {
        $(this).hide()
        $('.w_player').hide()
        $('.w_player').addClass('player_hidden')
        $('.w_selector').animate(
          {
            bottom: '0px',
          },
          200
        )
      })
      $('.w_selector').addClass('w_hidden')
      $('#ma_walks, .w_button').removeClass('w_active')
    }
  })
})

$(function () {
  $('.w_button').click(function () {
    $(this).siblings('.w_button').hide()
    $(this).addClass('w_active')
    if ($('.w_player').hasClass('player_hidden')) {
      $('.w_selector').animate(
        {
          bottom: '50px',
        },
        200
      )
      $('.w_player').fadeIn(350).css('display', 'flex')
      $('.w_player').removeClass('player_hidden')
    }
  })
})

// Player Width
$(function () {
  var playerWidth = $(window).width() - 280
  $('.w_player').width(playerWidth)
  $(window).resize(function () {
    var playerWidth = $(window).width() - 280
    $('.w_player').width(playerWidth)
  })
})

// Player Files
var audioAleid = '/audio/lisa/msa_aleid_de_jong.mp3'
var audioJacob = '/audio/lisa/msa_jacob_knegtel.mp3'
var audioMarit = '/audio/lisa/msa_marit_mihklepp.mp3'

$(function () {
  $('#walk_01').click(function () {
    $('#my-audio').removeClass()
    document.getElementById('audioSource').src = audioMarit
    document.getElementById('my-audio').load()
    $('#my-audio').addClass('marit')
  })
  $('#walk_02').click(function () {
    $('#my-audio').removeClass()
    document.getElementById('audioSource').src = audioJacob
    document.getElementById('my-audio').load()
    $('#my-audio').addClass('jacob')
  })
  $('#walk_03').click(function () {
    $('#my-audio').removeClass()
    document.getElementById('audioSource').src = audioAleid
    document.getElementById('my-audio').load()
    $('#my-audio').addClass('aleid')
  })
})
