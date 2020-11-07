$('window').ready(function() {
  vancouverPreview();

  $('div.inputs > input').bind('input', function() {
    vancouverPreview();
  });

  $('input[type=radio]').click(function() {
    inputFieldsSwtich(this);
  });

  $('input[type=radio]:checked').each(function () {
    inputFieldsSwtich(this);
    vancouverPreview();
  })
});

function toggleInputFields(fields) {
  $('.show_input').removeClass('show_input');

  for (var i = 0; i < fields.length; i++) {
    $("#" + fields[i]).addClass('show_input');
  }
}

function vancouverPreview() {
  // console.log('gen preview');
  var previewValue = '';
  $('.show_input').each(function() {
    // console.log($(this).val());
    console.log('each');
    if ($(this).val()) {
      if ($(this).attr('id') === 'url') {
        previewValue += '<span class="' + $(this).attr('id') + '"><a href="' + $(this).val() + '">' + $(this).val() + '</a></span>';
      } else {
        previewValue += '<span class="' + $(this).attr('id') + '">' + $(this).val() + '</span>';
      }
    }

  });

  $('.preview').html(previewValue)
  previewValue = '';
}


function inputFieldsSwtich(obj) {
  var selected_id = $(obj).attr('id');
  var fields;
  switch (selected_id) {
    case "book_print":
      console.log('test');
      fields = [
        'author',
        'title',
        'series_title_and_number',
        'edition',
        'place_of_publication',
        'publisher',
        'year_of_publication',
      ]

      toggleInputFields(fields);
      break;
    case "book_online":
      fields = [
        'author',
        'title',
        'series_title_and_number',
        'edition',
        'place_of_publication',
        'publisher',
        'year_of_publication',
        'url',
        'date_of_access',
      ]

      toggleInputFields(fields);
      break;
    case "book_chapter":
      fields = [
        'author_of_chapter',
        'title_of_chapter',
        'editor',
        'title_of_chapter',
        'series_title_and_number',
        'edition',
        'place_of_publication',
        'publisher',
        'year_of_publication',
        'page_numbers',
      ]

      toggleInputFields(fields);
      break;
    case "artwork":
      fields = [
        'title_artwork',
        'artist_name',
        'year_of_artwork'
      ]

      toggleInputFields(fields);
      break;
    case "journal_print":
      fields = [
        'author',
        'title_of_journal_article',
        'title_of_journal',
        'year_of_publication',
        'volume_number',
        'issue_number',
        'page_numbers_of_article',
      ]

      toggleInputFields(fields);
      break;
    case "journal_online":
      fields = [
        'author',
        'title_of_journal_article',
        'title_of_journal',
        'year_of_publication',
        'volume_number',
        'issue_number',
        'page_numbers_of_article',
        'url',
      ]

      toggleInputFields(fields);
      break;
    case "pre_print_journal":
      fields = [
        'author',
        'title_of_journal_article',
        'submitted_to',
        'title_of_journal',
        'year_of_writing',
        'url',
      ]

      toggleInputFields(fields);
      break;
    case "conference_proceeding":
      fields = [
        'author',
        'title_of_conference_paper',
        'organisation',
        'title',
        'place_of_publication',
        'publisher',
        'year_of_publication',
        'page_numbers',
      ]

      toggleInputFields(fields);
      break;
    case "standard":
      fields = [
        'name_of_standard_body',
        'standard_number',
        'title',
        'place_of_publication',
        'publisher',
        'year_of_publication',
      ]

      toggleInputFields(fields);
      break;
    case "report":
      fields = [
        'author',
        'title',
        'organisation',
        'report_number',
        'year_of_publication',
      ]

      toggleInputFields(fields);
      break;
    case "map":
      fields = [
        'author',
        'title',
        'scale',
        'place_of_publication',
        'publisher',
        'year_of_publication',
      ]

      toggleInputFields(fields);
      break;
    case "website":
      fields = [
        'author',
        'title',
        'url',
        'date_of_access',
      ]

      toggleInputFields(fields);
      break;
    case "email":
      fields = [
        'sender',
        'email_sent_to',
        'name_of_reciever',
        'date_of_information_provided',
      ]

      toggleInputFields(fields);
      break;
    case "personal_communication":
      fields = [
        'name_of_practitioner',
        'occupation',
        'personal_communication',
        'date_of_information_provided',
      ]

      toggleInputFields(fields);
      break;
    case "lecture":
      fields = [
        'author',
        'title_of_lecture',
        'name_of_location',
        'date_of_information_provided',
      ]

      toggleInputFields(fields);
      break;
    case "nice_guidelines":
      fields = [
        'author',
        'title_of_number_of_guideline',
        'date_of_information_provided',
        'url',
        'date_of_access',
      ]

      toggleInputFields(fields);
      break;

    default:
  }
}


// Hide Too Much Text
$(function() {
  $('.text').each(function() {
    if ($(this).height() > 200) {
      $(this).find($('.cover')).show();
    }
  });

  setTimeout(function () {
    $('.text').each(function() {
      if ($(this).height() > 200) {
        $(this).find($('.cover')).show();
      }
    });
  }, 700);
});

// Reveal Text
$(function() {
  $('.show_more').click(function() {
    $(this).closest($('.text')).css('max-height', 'none');
    $(this).closest($('.cover')).hide();
  });
});

// Submit form
$(function() {
  $('#publish').click(function() {
    $(".input_form").submit();
  });
});
