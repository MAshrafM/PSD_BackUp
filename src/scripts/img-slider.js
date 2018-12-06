const imgSlider = $('.img-slider');

imgSlider.each(function(){
  let currentSlider = $(this),
      currentSlides = currentSlider.find(' .slider-block__slides'),
      imageSliderArrowPrev = currentSlider.find('.img-slider__nav--prev'),
      imageSliderArrowNext = currentSlider.find('.img-slider__nav--next');

  currentSlides.slick({
    arrows: true,
    prevArrow: imageSliderArrowPrev,
    nextArrow: imageSliderArrowNext,
    fade: true
  });

  const currentSectionBgColor = $(currentSlider).parents('.page-block').css('background-color');
  imageSliderArrowPrev.css({'border-color': currentSectionBgColor});
  imageSliderArrowNext.css({'border-color': currentSectionBgColor});
});