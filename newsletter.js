// See https://stackoverflow.com/questions/46155/how-can-you-validate-an-email-address-in-javascript
function validateEmail (email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

window.onload = function () {
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
}

