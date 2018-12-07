const HomePage = $("#home-page");
const OverviewPage = $("#overview-page");
const FeaturesPage = $("#features-page")

const OverviewLink = $("#overview");
const FeaturesLink = $("#features");

OverviewLink.click((e) => {
  e.preventDefault();
  if(HomePage.is(':visible')){
    HomePage.fadeOut(1000, () => {
      OverviewPage.fadeIn(1000);
    });
  }
  if(FeaturesPage.is(':visible')){
    FeaturesPage.fadeOut(1000, () => {
      OverviewPage.fadeIn(1000);
    });
  }
});

FeaturesLink.click((e) => {
  e.preventDefault();
  if(HomePage.is(':visible')){
    HomePage.fadeOut(1000, () => {
      FeaturesPage.fadeIn(1000);
    });
  }
  if(OverviewPage.is(':visible')){
    OverviewPage.fadeOut(1000, () => {
      FeaturesPage.fadeIn(1000);
    });
  }
})