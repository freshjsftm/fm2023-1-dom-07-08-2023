'use strict';

const unique = document.getElementById('unique');
const section = unique.parentElement;

const log = (event) => {
  event.preventDefault();
  event.stopPropagation();
  console.group();
  console.log(event.target); //на кому згенерувалася подія
  console.log(event.currentTarget); //чий обробник працює
  console.groupEnd();
  event.target.removeEventListener('click', log);
};

unique.addEventListener('click', log);
section.addEventListener('click', log);
document.body.addEventListener('click', log, false);
// document.addEventListener('click', log);
window.addEventListener('click', log, { capture: false, once: true });

// unique.addEventListener(
//   'click',
//   (event) => {
//     console.log('event');
//   },
//   { once: true }
// );
