const controlPanelItem = $('.control-panel__item');

controlPanelitem.click(function(e) {
  e.preventDefault();
  let currentItem = $(this),
      currentPanelItems = currentItem.siblings();
      
  currentPanelItems.removeClass('js-active');
  currentItem.addClass('js-active');
});