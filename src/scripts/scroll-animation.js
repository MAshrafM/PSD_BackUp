const windowWidth = $(window).width();

// init animation
$(window).on('load', () => {
  if(windowWidth > 992){
    let initLoadedElements = $('.js-initial-loading');
  
    setTimeout(() => {
      initLoadedElements.addClass('js-loaded-element')
    }, 500);
  }
});

// scroll animation
$(document).scroll(() => {
  if(windowWidth > 992){
    let loadedElements = $('.js-loading-effect');
    loadedElements.each(function(){
      let currentElement = $(this),
          distanceFromTop = $(document).scrollTop() + $(window).height() - 100,
          elementDistance = currentElement.offset().top;

      if(distanceFromTop > elementDistance){
        currentElement.addClass('js-loaded-element');
      }
    })
  }
});