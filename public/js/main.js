let apiEndpoint = document.querySelectorAll('.api-endpoint')

apiEndpoint.forEach((e) => {
  e.addEventListener('click', () => {
    temp = e.innerHTML
    copyStringToClipboard(e.firstChild.innerHTML)
    e.innerHTML = 'copied'
    setTimeout(() => {
      e.innerHTML = temp
    }, 500)
  })
})

let countryCode = `<img src="https://www.countries-api.rokskrbec.si/api/countries/FlagByCountryCode/si/512" alt=""></img>`

document.querySelector('.country-code').innerHTML = encodeHtml(countryCode)

//--------------- encode html to display as code ----------------------------
function encodeHtml(rawString) {
  return rawString.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
    return '&#' + i.charCodeAt(0) + ';'
  })
}

// --------------------------------- copy string to offscreen textarea and then to clipboard --------------------------

function copyStringToClipboard(str) {
  // Create new element
  var el = document.createElement('textarea')
  // Set value (string to be copied)
  el.value = `https://www.countries-api.rokskrbec.si` + str
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '')
  el.style = { position: 'absolute', left: '-9999px' }
  document.body.appendChild(el)
  // Select text inside element
  el.select()
  // Copy text to clipboard
  document.execCommand('copy')
  // Remove temporary element
  document.body.removeChild(el)
}

let showCodes = document.querySelector('.show-codes')
let countryCodesList = document.querySelector('.country-codes-list')

showCodes.addEventListener('click', function () {
  countryCodesList.classList.toggle('active')
  if (showCodes.innerHTML == 'Click to show') {
    showCodes.innerHTML = 'Click to hide'
  } else {
    showCodes.innerHTML = 'Click to show'
  }
})

fetch('http://localhost:3000/api/countries')
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      countryCodesList.innerHTML += `<div class="list-item">${data[i].countryCode} - ${data[i].enShortName}<img src="http://localhost:3000/api/countries/FlagByCountryCode/${data[i].countryCode}/256" alt=""></img></div>`
    }
  })
