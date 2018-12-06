const controlPanel = $('.control-panel');

controlPanel.each(function(){
  let currentPanel = $(this),
      currentPanelName = currentPanel.attr('id'),
      slider = $('.img-slider'),
      currentSlider, currentSliderInit;

  slider.each(function () {
    let checkedSlider = $(this),
       checkedSliderPanel = checkedSlider.data('panel');

    if (currentPanelName == checkedSliderPanel) {currentSlider = checkedSlider;}
  });

  currentSliderInit = currentSlider.find('.img-slider__slides');

  let currentPanelItems = currentPanel.find('.control-panel__item');

  currentPanelItems.click(function () {
    let clickedPanelItem = $(this),
        clickedPanelCategory = clickedPanelItem.data('panelCategory'),
        currentSliderSlides = currentSlider.find('.img-slider__slide');

    currentSliderSlides.each(function () {
      let currentSlide = $(this),
          currentSlideCategory = currentSlide.data('slideCategory');
      
      if (clickedPanelCategory == currentSlideCategory) {
        let currentSlideIndex = currentSlide.parents('.slick-slide').index();
        currentSliderInit.slick('slickGoTo', currentSlideIndex);
        return false;
      }
    });
  });

  currentSliderInit.on('afterChange', function () {
    let currentSlide = currentSliderInit.find('.slick-active').find('.img-slider__slide'),
        currentSlideCategory = currentSlide.data('slideCategory');

    currentPanelItems.each(function () {
      let currentItem = $(this),
          currentItemCategory = currentItem.data('panelCategory');
      if (currentItemCategory == currentSlideCategory) {
        currentPanelItems.removeClass('js-active');
        currentItem.addClass('js-active');
        return false;
      }
    });
  });
});