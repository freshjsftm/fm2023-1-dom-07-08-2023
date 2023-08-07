
const logo = document.querySelector('.logo');

function logLogo(event) {
  console.log(event);
  event.preventDefault();
  console.log('logo');
  logo.removeEventListener('click', logLogo);
}

logo.addEventListener('click', logLogo);
