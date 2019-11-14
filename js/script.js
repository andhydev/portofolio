$('.page-scroll').on('click', function (e) {

    var href = $(this).attr('href');
    var elementHref = $(href);

    $('body').scrollTop(elementHref.offset().top);

    e.preventDefault();

});