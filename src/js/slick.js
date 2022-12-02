$('.variable-width').slick({
  prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
  dots: false,
  appendArrows: $('.slider-nav'),
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true
});
