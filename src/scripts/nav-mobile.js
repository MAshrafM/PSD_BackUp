const mobileNavBtn = $('#mobile-nav-btn');
const mobileMenu = $('#nav-list');
const mobileMenuScrollBar = mobileMenu.find('.ps__rail-y');

mobileNavBtn.click(function() {
  $(this).toggleClass('js-opened');
  if($(this).hasClass('js-opened')){
    mobileMenuScrollBar.css({
      'height': '0',
      'top': '0'
    });
  }
});