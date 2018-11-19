import PerfectScrollbar from './perfect-scrollbar';

if($('.js-scrollbar-1').length > 1){
  const container1 = document.querySelector('.js-scrollbar-1');
  const ps1 = new PerfectScrollbar(container1);
}

if ($('.js-scrollbar-2').length > 0) {
  const container2 = document.querySelector('.js-scrollbar-2');
  const ps2 = new PerfectScrollbar(container2, {
      suppressScrollX: true
  });
}
if ($('.js-scrollbar-3').length > 0) {
  const container3 = document.querySelector('.js-scrollbar-3');
  const ps3 = new PerfectScrollbar(container3, {
      suppressScrollX: true
  });
}

// Header Scroll Behavior
$(document).scroll(function () {
  let scrollTop = $(this).scrollTop(),
    header = $('.header');
  if (scrollTop > 0) {
    header.addClass('js-scrolled');
  } else {
    header.removeClass('js-scrolled');
  }
});

$(document).ready(function(){
  const header = $('.header');
  let offsetTop = header.offset().top;

  if(offsetTop > 0){
    header.addClass('js-scrolled');
  }
});