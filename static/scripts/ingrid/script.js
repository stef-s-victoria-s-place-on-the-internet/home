$(window).ready(function() {
  // ------------ Logo Height ------------ //
  // var oaLogo = $('.oa_logo');
  // var oaLogoHeight = $('.oa_logo').height();
  // var docHeight = $(document).height();

  // ------------ reload to top ------------ //

  window.onbeforeunload = function() {
    window.scrollTo(0, 0)
  }

  // ------------ Footnotes ------------ //

  function distance_f(index) {
    var scrollTop = $(window).scrollTop()
    var elementOffset = $('#f_' + index).offset().top
    var distance = elementOffset - scrollTop

    return distance
  }

  function distance_fe(index) {
    var scrollTop = $(window).scrollTop()
    var elementOffset = $('#fe_' + index).offset().top
    var distance = elementOffset - scrollTop

    return distance
  }

  function pad(d) {
    return d < 10 ? '0' + d.toString() : d.toString()
  }

  $(document).ready(function() {
    // Handler for .ready() called.
    var count = 1
    console.log('loaded')
    setTimeout(function() {
      console.log('timeout')
      // for each footnote position footnote text
      var arrayOf_oa_footnote_num = $('.oa_footnote_num')
      for (var i = 0; i < arrayOf_oa_footnote_num.length; i++) {
        var index = i + 1
        var index = pad(index)
        var c = Math.ceil(distance_f(index) - distance_fe(index))

        $('#fe_' + index).css({
          top: c,
        })

        // give extra space if they clip
        if (i >= 1) {
          var previous_index = pad(i)
          if (distance_fe(index) - distance_fe(previous_index) < 70) {
            // clipping so give extra space for amount of objects clipping

            $('#fe_' + index).css({
              top: c + 85 * count,
            })
            count++
          } else {
            // reset count
            count = 1
          }
        }
      }
    }, 400)
  })

  // ------------ Footnotes-Hover ------------ //
  $('.oa_footnote').hover(function() {
    var currentId = '#f_' + this.id.substr(3)
    $(currentId).toggleClass('oa_footnote_num_active')
  })

  setTimeout(function() {
    $('.oa_footnote_num').hover(function() {
      var currentId = '#fe_' + this.id.substr(2)
      $(currentId).toggleClass('oa_footnote_active')
    })
  }, 500)

  // ------------ Preserve ------------ //
  $(function() {
    $('#modal_01, #modal_02').click(function(e) {
      e.preventDefault()
      $('.oa_modal_wrapper').fadeIn(300)
    })
    $('#oa_close').click(function(e) {
      e.preventDefault()
      $('.oa_modal_wrapper').fadeOut(200)
    })
    $('.oa_modal_wrapper').click(function() {
      $('.oa_modal_wrapper').fadeOut(200)
    })
    $('.oa_modal').click(function(e) {
      e.stopPropagation()
    })
  })

  // ----------------------------------- //
  $(function() {
    if ($(window).width() <= 1020) {
      $('.oa_logo_color').empty()
    } else {
      $('#oa_logo_p1').html('one acre')
      $('#oa_logo_p2').html('.online')
    }
  })

  $(window).resize(function() {
    if ($(window).width() <= 1020) {
      $('.oa_logo_color').empty()
    } else {
      $('#oa_logo_p1').html('one acre')
      $('#oa_logo_p2').html('.online')
    }
  })

  // ------------ Mobile Menu ------------ //
  $(function() {
    $('#oa_h_plus').click(function() {
      if ($('#oa_h_plus').hasClass('rotated')) {
        $('#oa_h_plus').removeClass('rotated')
        $('.oa_mobile_menu').slideToggle()
      } else {
        $('#oa_h_plus').addClass('rotated')
        $('.oa_mobile_menu').slideToggle()
      }
    })
    $('#oa_notes, #oa_f_plus').click(function() {
      if ($('.oa_c_right').is(':visible') === true) {
        $('.oa_c_right, .oa_f_title').fadeOut()
        $('.oa_mobile_menu').hide()
      } else {
        $('.oa_c_right, .oa_f_title').fadeIn()
        $('.oa_mobile_menu').hide()
      }
    })
  })

  // ------------ Fade In ------------ //

  // $(document).ready(function() {
  //   $(function() {
  //     $('.oa_title_container').animate({
  //         opacity: '1',
  //       },
  //       4000
  //     )
  //     $('.oa_author, .oa_logo').delay(1000).animate({
  //         opacity: '1',
  //       },
  //       4000
  //     )
  //     $('.oa_content, .oa_preserve, .oa_payment, .notice').delay(2000).animate({
  //         opacity: '1',
  //       },
  //       4000
  //     )
  //     $('.oa_c_left').delay(2000).animate({
  //         opacity: '1',
  //       },
  //       4000
  //     )
  //     $('.oa_c_right').delay(2000).animate({
  //         opacity: '1',
  //       },
  //       4000
  //     )
  //     $('.oa_footer').delay(2000).animate({
  //         opacity: '1',
  //       },
  //       4000
  //     )
  //   })
  // })

  // ------------ Footnote Positioning ------------ //
  // $(function (){
  //     var f01 = $( "#f_01" );
  //     var f02 = $( "#f_02" );
  //     var f03 = $( "#f_03" );
  //     var f04 = $( "#f_04" );
  //     var f05 = $( "#f_05" );
  //     var tH = $(".oa_title_wrapper").height() + 30;
  //     var p01 = f01.offset().top - tH;
  //     var p02 = f02.offset().top - tH;
  //     var p03 = f03.offset().top - tH;
  //     var p04 = f04.offset().top - tH;
  //     var p05 = f05.offset().top - tH;
  //     $( "#fe_01" ).css({'top' : p01});
  //     $( "#fe_02" ).css({'top' : p02});
  //     $( "#fe_03" ).css({'top' : p03});
  //     $( "#fe_04" ).css({'top' : p04});
  //     $( "#fe_05" ).css({'top' : p05});
  // });

  // ------------ Background Canvas ------------ //
  ;
  (function() {
    var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d')

    // resize the canvas to fill browser window dynamically
    $(document).resize(resizeCanvas)

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      function drawCanvas() {
        var vW = $(window).width()
        var vH = $('canvas').height()
        var pW = Math.round(Math.random() * (vW - 1) + 1)
        var pH = Math.round(Math.random() * (vH - 1) + 1)
        context.fillStyle = 'rgba(255,255,255,0.25)'
        context.fillRect(pW, pH, 2, 2)
        context.fillRect(
          Math.round(Math.random() * (vW - 1) + 1),
          Math.round(Math.random() * (vH - 1) + 1),
          1,
          1
        )
        context.fillRect(
          Math.round(Math.random() * (vW - 1) + 1),
          Math.round(Math.random() * (vH - 1) + 1),
          1,
          1
        )
        context.fillRect(
          Math.round(Math.random() * (vW - 1) + 1),
          Math.round(Math.random() * (vH - 1) + 1),
          1,
          1
        )
        context.fillRect(
          Math.round(Math.random() * (vW - 1) + 1),
          Math.round(Math.random() * (vH - 1) + 1),
          1,
          1
        )
        // context.fillRect(
        //   Math.round(Math.random() * (vW - 1) + 1),
        //   Math.round(Math.random() * (vH - 1) + 1),
        //   1,
        //   1
        // )
        // context.fillRect(
        //   Math.round(Math.random() * (vW - 1) + 1),
        //   Math.round(Math.random() * (vH - 1) + 1),
        //   1,
        //   1
        // )
        // context.fillRect(
        //   Math.round(Math.random() * (vW - 1) + 1),
        //   Math.round(Math.random() * (vH - 1) + 1),
        //   1,
        //   1
        // )
        // context.fillRect(
        //   Math.round(Math.random() * (vW - 1) + 1),
        //   Math.round(Math.random() * (vH - 1) + 1),
        //   1,
        //   1
        // )
        // context.fillRect(
        //   Math.round(Math.random() * (vW - 1) + 1),
        //   Math.round(Math.random() * (vH - 1) + 1),
        //   1,
        //   1
        // )
      }
      $(window).scroll(function() {
        drawCanvas()
      })
    }
    resizeCanvas()
  })()
})