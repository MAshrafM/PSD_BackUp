const toggleBtn = $('.switch-block__toggle');

toggleBtn.click(function() {
  const clickedToggleBtn = $(this),
        toggleInput = clickedToggleBtn.siblings('input[type="radio"]');

  clickedToggleBtn.toggleClass('js-checked');
  toggleInput.not(':checked').trigger('click');
});

const switchLabel = $('.switch-block__label');

switchLabel.click(function () {
  const clickedSwitchBtn = $(this),
        currentToggleInputs = $('#' + clickedSwitchBtn.attr('for')),
        currentToggleBtn = clickedSwitchBtn.siblings('.switch-block__toggle');

  if(!currentToggleInputs.is(':checked')){
    currentToggleBtn.toggleClass('js-checked');
  }
});