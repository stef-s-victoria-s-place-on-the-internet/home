$('window').ready(function() {

  $('.preview').each(function () {
    var id = $(this).attr('id');
    inputFieldsSwtich($(this));
  });

});


// filter vancouver references based on fields. (this removes accedental unwanted references)
function toggleFields(obj, fields) {
  $(obj).children().each(function () {
    if (!fields.includes($(this).attr('class'))) {
      $(this).remove();
    }
  });
};



function inputFieldsSwtich(obj) {
  // console.log(obj.attr('id'));
  var fields;
  switch (obj.attr('id')) {
    case "book_print":
      fields = [
        'author',
        'title',
        'series_title_and_number',
        'edition',
        'place_of_publication',
        'publisher',
        'year_of_publication',
      ]

      toggleFields(obj, fields);
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

      toggleFields(obj, fields);
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

      toggleFields(obj, fields);
      break;
    case "artwork":
      fields = [
        'title_artwork',
        'artist_name',
        'year_of_artwork'
      ]

      toggleFields(obj, fields);
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

      toggleFields(obj, fields);
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

      toggleFields(obj, fields);
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

      toggleFields(obj, fields);
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

      toggleFields(obj, fields);
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

      toggleFields(obj, fields);
      break;
    case "report":
      fields = [
        'author',
        'title',
        'organisation',
        'report_number',
        'year_of_publication',
      ]

      toggleFields(obj, fields);
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

      toggleFields(obj, fields);
      break;
    case "website":
      fields = [
        'author',
        'title',
        'url',
        'date_of_access',
      ]

      toggleFields(obj, fields);
      break;
    case "email":
      fields = [
        'sender',
        'email_sent_to',
        'name_of_reciever',
        'date_of_information_provided',
      ]

      toggleFields(obj, fields);
      break;
    case "personal_communication":
      fields = [
        'name_of_practitioner',
        'occupation',
        'personal_communication',
        'date_of_information_provided',
      ]

      toggleFields(obj, fields);
      break;
    case "lecture":
      fields = [
        'author',
        'title_of_lecture',
        'name_of_location',
        'date_of_information_provided',
      ]

      toggleFields(obj, fields);
      break;
    case "nice_guidelines":
      fields = [
        'author',
        'title_of_number_of_guideline',
        'date_of_information_provided',
        'url',
        'date_of_access',
      ]

      toggleFields(obj, fields);
      break;

    default:
  }
}
