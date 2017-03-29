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

  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
    $(this).toggleClass('open');
  });
  $('.scroll-content').slimScroll({
    height: '500px',
    color: '#ce000c',
    size: '3px'
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
  $('.navbar a').on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 95
    }, 800, function() {
      window.location.hash = hash;
    });
  });

  $('a.link-to').on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 128
    }, 800, function() {
    });
  });

});
