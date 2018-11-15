const loginForm = $('#contact-login-form-block');
const loginFormBtn = $('#login-form-btn');

loginFormBtn.click((e) => {
  e.preventDefault();
  if(loginFormBtn.hasClass('js-active')){
    loginFormBtn.removeClass('js-active');
    loginForm.fadeOut();
  } else {
    loginFormBtn.addClass('js-active');
    loginForm.fadeIn();
  }
})

$(document).click((e) => {
  if(! ($(e.target).closest(loginForm).length || $(e.target).closest(loginFormBtn).length)){
    if($(loginForm).is(':visible')){
      loginFormBtn.removeClass('js-active');
      loginForm.fadeOut();
    }
  }
})
