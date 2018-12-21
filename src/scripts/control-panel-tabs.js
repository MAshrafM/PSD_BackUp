const controlPanel = $('.control-panel[data-connected-type="tabs"]');

controlPanel.each(function(){
  let currentPanel = $(this),
      currentPanelName = currentPanel.attr('id'),
      tabs = $('.tabs'),
      currentTabs;

  tabs.each(function () {
    let checkedTabs = $(this),
        checkedTabsPanel = checkedTabs.data('panel');

    if (currentPanelName == checkedTabsPanel) {currentTabs = checkedTabs;}
  });

  let currentPanelItems = currentPanel.find('.control-panel__item'),
      currentTabsPanel = currentTabs.find('.tabs__panel');

  currentPanelItems.click(function () {
    let clickedPanelItem = $(this),
        clickedPanelItemIndex = clickedPanelItem.index();
    
    currentTabsPanel.fadeOut().removeClass('js-active');

    setTimeout(function () {
        currentTabsPanel.eq(clickedPanelItemIndex).fadeIn().addClass('js-active');
    }, 50);
    
  });
});