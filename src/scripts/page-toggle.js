const OverviewPage = $("#overview-page");
const FeaturesPage = $("#features-page");
const ResellersPage = $('#resellers-page');

const OverviewLink = $(".overview");
const FeaturesLink = $(".features");
const ResellersLink = $(".resellers");

let pages = $("#page-content").children();

function togglePage(page){
  pages.each(function () {
    if ($(this).is(':visible')) {
      $(this).fadeOut(1000, () => {
        page.fadeIn(1000);
      });
    }
  });
}

OverviewLink.click((e) => {
  e.preventDefault();
  togglePage(OverviewPage);
});

FeaturesLink.click((e) => {
  e.preventDefault();
  togglePage(FeaturesPage)
});

ResellersLink.click((e) => {
  e.preventDefault();
  togglePage(ResellersPage)
});