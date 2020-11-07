$(window).ready(function () {
  var oaLogo = $('.oa_logo')
  var oaLogoInner = $('.oa_logo_inner')

  oaLogoInner.css('margin-top', 10)

  $(window).scroll(function () {
    // ------------ Get the data ------------ //
    var oaLogoHeight = $('.oa_logo').height()
    var footerPosition =
      $('.oa_footer').position().top + $('.oa_footer').outerHeight(true)
    var docHeight = footerPosition - $(window).height()
    var scrollPosition = $(document).scrollTop()

    // ------------ Calculate ------------ //
    var percentOfScroll = (100 / docHeight) * scrollPosition
    var oaLogoMargin = (percentOfScroll / 100) * 218

    if (oaLogoHeight > 400) {
      var oaLogoMargin = (percentOfScroll / 100) * 375
    } else {
      var oaLogoMargin = (percentOfScroll / 100) * 218
    }

    // Make sure the lowest it can go is 10
    if (oaLogoMargin < 10) {
      oaLogoMargin = 10
    }

    // ------------ Modify the css ------------ //
    var logoAllowedToScroll = true
    if (logoAllowedToScroll) {
      oaLogoInner.css('margin-top', oaLogoMargin)
    } else {
      if ($(window).width() <= 460) {
        oaLogoInner.css('margin-top', 297)
      } else if ($(window).width() <= 768) {
        oaLogoInner.css('margin-top', 446)
      } else {
        oaLogoInner.css('margin-top', 375)
      }
    }
  })

  // ------------ Logo Text Hide ------------ //
  var oaLogoColor = $('.oa_logo_color')

  $(window).scroll(function () {
    if ($(window).scrollTop() < 100) {
      oaLogoColor.css('opacity', 1)
    } else if (
      $(window).scrollTop() + $(window).height() == $(document).height() ||
      $('.oa_footer').hasClass('oa_footer_fixed')
    ) {
      oaLogoColor.css('opacity', 1)
    } else {
      oaLogoColor.css('opacity', 0)
    }
  })

  // ------------ Scrolled to Bottom ------------ //
  $(window).scroll(function () {
    if (
      $(window).scrollTop() + $(window).height() == $(document).height() ||
      $('.oa_footer').hasClass('oa_footer_fixed')
    ) {
      $('.oa_logo').css({
        color: '#191919',
        border: '1px solid #191919',
      })
      $('.oa_logo_inner').css('border-color', '#191919')
    } else {
      $('.oa_logo').css({
        color: '#0000FF',
        border: '1px solid #0000FF',
      })
      $('.oa_logo_inner').css('border-color', '#0000FF')
    }
  })

  // ------------ Logo Text Hide on Hover ------------ //
  $('.oa_logo')
    .mouseenter(function () {
      if (oaLogoColor.css('opacity') == 0) {
        oaLogoColor.css('opacity', 1)
      } else {
        oaLogoColor.css('opacity', 1)
      }
    })
    .mouseleave(function () {
      if (oaLogoColor.css('opacity') == 1 && $(window).scrollTop() >= 100) {
        oaLogoColor.css('opacity', 0)
      } else {
        oaLogoColor.css('opacity', 0)
      }
    })

  // ------------ Preserve ------------ //
  $(function () {
    $('.oa_preserve, .oa_footer_signup').click(function (e) {
      e.preventDefault()
      $('.oa_modal_wrapper').fadeIn(300)
    })
    $('#oa_close').click(function (e) {
      e.preventDefault()
      $('.oa_modal_wrapper').fadeOut(200)
    })
    $('.oa_modal_wrapper').click(function () {
      $('.oa_modal_wrapper').fadeOut(200)
    })
    $('.oa_modal').click(function (e) {
      e.stopPropagation()
    })
  })

  // --------------- mediaQuery windowresize -------------------- //

  $(window).ready(function () {
    if ($(window).width() <= 768) {
      $('.oa_logo_color').empty()
    } else {
      $('#oa_logo_p1').html('one acre')
      $('#oa_logo_p2').html('.online')
    }
  })

  $(window).resize(function () {
    if ($(window).width() <= 768) {
      $('.oa_logo_color').empty()
    } else {
      $('#oa_logo_p1').html('one acre')
      $('#oa_logo_p2').html('.online')
    }
  })

  // --------------- limit key presses and other ways of trying to cheat the plowing -------------------- //
  $(window).ready(function () {
    window.addEventListener(
      'keydown',
      function (e) {
        // space and arrow keys
        if ([32, 33, 34, 35, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault()
        }
      },
      false
    )
  })

  // ------------ Footnote Expand ------------ //
  $('#oa_footnote_01').click(function () {
    $('#oa_footnote_entry_01').slideToggle(200, function () {
      footerPosition()
    })
  })

  $('#oa_footnote_02').click(function () {
    $('#oa_footnote_entry_02').slideToggle(300, function () {
      footerPosition()
    })
  })

  $('#oa_footnote_03').click(function () {
    $('#oa_footnote_entry_03').slideToggle(300, function () {
      footerPosition()
    })
  })

  $('#oa_footnote_04').click(function () {
    $('#oa_footnote_entry_04').slideToggle(300, function () {
      footerPosition()
    })
  })

  $('#oa_footnote_05').click(function () {
    $('#oa_footnote_entry_05').slideToggle(300, function () {
      footerPosition()
    })
  })

  $('#oa_footnote_06').click(function () {
    $('#oa_footnote_entry_06').slideToggle(300, function () {
      footerPosition()
    })
  })

  $('#oa_footnote_07').click(function () {
    $('#oa_footnote_entry_07').slideToggle(300, function () {
      footerPosition()
    })
  })
})
