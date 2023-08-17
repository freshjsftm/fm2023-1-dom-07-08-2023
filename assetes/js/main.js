'use strict';

const list = document.getElementById('list');

// list.addEventListener('click', handleClick);

// function handleClick({ target }) {
//   console.log(this);
//   console.log(target.innerText);
// }

list.addEventListener('click', ({ target }) => {
  // console.log(target.parentElement);
  // console.log(target.innerText);
  // console.log(target.closest('#list'));
  if (target.parentElement === list) {
    target.innerText += '!';
  }
});
