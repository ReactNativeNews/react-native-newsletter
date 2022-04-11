// See https://stackoverflow.com/questions/46155/how-can-you-validate-an-email-address-in-javascript
function validateEmail (email) {
  var re = /^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function enableScroll () {
  ['html', 'body'].forEach(function (selector) {
    document.querySelector(selector).style = ''
  })
}

function disableScroll () {
  ['html', 'body'].forEach(function (selector) {
    document.querySelector(selector).style = 'position: fixed; height: 100vh; overflow: hidden;'
  })
}

function displayError (element) {
  element.classList.add('error')
}

function hideError (element) {
  element.classList.remove('error')
}

window.onload = function () {
  // Subscribe Form
  var subscribeForm = document.querySelector('.subscribe-form form')
  var emailWrapper = document.querySelector('.email-input')
  var emailInput = document.querySelector('.email-input input')

  if (subscribeForm !== null) {
    subscribeForm.addEventListener('submit', function (event) {
      event.preventDefault()

      if (validateEmail(emailInput.value)) {
        emailWrapper.className = 'input-field email-input'
        subscribeForm.submit()
      } else {
        emailWrapper.className = 'input-field email-input error'
      }
    })
  }

  // Mobile navigation
  var openNav = document.querySelector('#open-menu')
  var closeNav = document.querySelector('nav.menu .close')
  var menu = document.querySelector('nav.menu')
  var content = document.querySelector(`section.content`)

  openNav.addEventListener('click', function (event) {
    event.preventDefault()
    window.scrollTo(0, 0)
    menu.classList.add('open')
    content.classList.add('hideable')
    disableScroll()
  })

  closeNav.addEventListener('click', function (event) {
    event.preventDefault()
    menu.classList.remove('open')
    content.classList.remove('hideable')
    enableScroll()
  })

  // Suggest an Article Modal
  var openSuggest = document.querySelectorAll('.open-suggest-article')
  var closeSuggest = document.querySelector('.suggest-article .close')
  var suggest = document.querySelector('.suggest-article')

  openSuggest.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault()
      suggest.classList.add('open')
      enableScroll()
    })
  })

  closeSuggest.addEventListener('click', function (event) {
    event.preventDefault()
    window.scrollTo(0, 0)
    suggest.classList.remove('open')

    if (menu.classList.contains('open')) {
      disableScroll()
    } else {
      enableScroll()
    }
  })

  // Suggest an Article Form
  var suggestForm = document.querySelector('.suggest-article form')
  var suggestName = document.querySelector('.suggest-article input[name="name"]')
  var suggestEmail = document.querySelector('.suggest-article input[name="email"]')
  var suggestUrl = document.querySelector('.suggest-article input[name="url"]')

  suggestForm.addEventListener('submit', function (event) {
    event.preventDefault()
    var errors = []

    if (suggestName.value.length === 0) {
      displayError(suggestName.parentElement)
      errors = errors.concat('name')
    } else {
      hideError(suggestName.parentElement)
    }

    if (!validateEmail(suggestEmail.value)) {
      displayError(suggestEmail.parentElement)
      errors = errors.concat('email')
    } else {
      hideError(suggestEmail.parentElement)
    }

    if (suggestUrl.value.length < 5) {
      displayError(suggestUrl.parentElement)
      errors = errors.concat('url')
    } else {
      hideError(suggestUrl.parentElement)
    }

    if (errors.length === 0) {
      suggestForm.submit()
    }
  })
}

