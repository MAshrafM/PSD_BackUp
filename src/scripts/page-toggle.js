const HomePage = $("#home-page");
const OverviewPage = $("#overview-page");

const OverviewLink = $("#overview");

OverviewLink.click((e) => {
  e.preventDefault();
  HomePage.fadeOut(1000, () => {
    OverviewPage.fadeIn(1000);
  });
})