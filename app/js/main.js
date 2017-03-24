'use strict';
$(function() {
  var wWidth = $(window).width();
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    nav: false,
    items: 1,
    dots: false,
    margin: 5
  });

  $('.slider-nav.next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.slider-nav.prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });



  //smoothscroll
  var sections = $('.section'),
    nav = $('.nav'),
    navHeight = nav.outerHeight();
  if (wWidth >= 1200) {
    $(window).on('scroll', function() {
      var curPos = $(this).scrollTop();

      sections.each(function() {
        var top = $(this).offset().top - navHeight,
          bottom = top + $(this).outerHeight();

        if (curPos >= top && curPos <= bottom) {
          nav.find('li').removeClass('active');
          sections.removeClass('active');

          $(this).addClass('active');
          nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
          window.location.hash = $(this).attr('id');

        }
      });
    });

  }
  $('a').on('click', function() {
    nav.find('li').removeClass('active');
    var $el = $(this),
      id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - 128
    }, 500);

    return false;
  });
});