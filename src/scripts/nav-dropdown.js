const dropdownBtn = $('.nav__link--dropdown');
const dropdown = $('.js-dropdown-mobile');

dropdownBtn.click(function(e) {
  e.preventDefault();
  
  const dropdownBtnCurrent = $(this);
  const windowWidth = $(document).width();
  let dropdownCurrent;
  if(windowWidth < 991){
    dropdownCurrent = dropdownBtnCurrent.siblings('.js-dropdown-mobile'); 

    if(!dropdownBtnCurrent.hasClass('js-active')){
      dropdownBtn.removeClass('js-active');
      dropdownBtnCurrent.addClass('js-active');
      dropdown.fadeOut();
      dropdownCurrent.fadeIn();
    } else {
      dropdownBtnCurrent.removeClass('js-active');
      dropdownCurrent.fadeOut();
    }
  }
});

$(document).click(function(e) {
  if(!($(e.target).closest(dropdown).length || $(e.target).closest(dropdownBtn).length)){
    if($(dropdown).is(':visible')){
      dropdownBtn.removeClass('js-active');
      dropdown.hide();
    }
  }
})