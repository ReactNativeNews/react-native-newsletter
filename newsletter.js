// See https://stackoverflow.com/questions/46155/how-can-you-validate-an-email-address-in-javascript
function validateEmail (email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

window.onload = function () {
  // Subscribe form
  var form = document.querySelector('.subscribe-form form');
  var emailWrapper = document.querySelector('.email-input')
  var emailInput = document.querySelector('.email-input input');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateEmail(emailInput.value)) {
      emailWrapper.className = 'email-input';
      form.submit();
    } else {
      emailWrapper.className = 'email-input error';
    }
  })

  // Mobile navigation
  var openNav = document.querySelector('#open-menu')
  var closeNav = document.querySelector('nav.menu .close')
  var menu = document.querySelector('nav.menu')
  var body = document.querySelector('body')

  openNav.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.add('open');
    body.style = 'height: 100vh; overflow: hidden';
  })

  closeNav.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.remove('open');
    body.style = '';
  })
}

