'use strict';
$(function() {
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


});
