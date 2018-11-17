const dropdownBtn = $('.nav__link--dropdown');
const dropdown = $('.nav__dropdown');

dropdownBtn.click((e) => {
  e.preventDefault();
  let dropdownBtnCurrent = $(this),
      dropdownCurrent = dropdownBtnCurrent.siblings('.nav__dropdown');

  if(!dropdownBtnCurrent.hasClass('js-active')){
    dropdownBtn.removeClass('js-active');
    dropdownBtnCurrent.removeClass('js-active');
    dropdown.fadeOut();
    dropdownCurrent.fadeIn();
  }
});

$(document).click((e) => {
  if(!($(e.target).closest(dropdown).length || $(e.target).closest(dropdownBtn).length)){
    if($(dropdown).is(':visible')){
      dropdownBtn.removeClass('js-active');
      dropdown.hide();
    }
  }
})