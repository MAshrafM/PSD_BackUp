const pages = $("#page-content").children();
const togglePageLink = $(".js-page-toggle");

function togglePage(page){
  pages.each(function () {
    if ($(this).is(':visible')) {
      $(this).fadeOut(1000, () => {
        page.fadeIn(1000);
      });
    }
  });
}

togglePageLink.click(function(e) {
  e.preventDefault();
  let page = $('#'+$(this).data('page'));
  togglePage(page);
});