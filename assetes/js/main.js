'use strict';

const sendBtn = document.getElementById('sendBtn');
// sendBtn.addEventListener('click', () => {});

// console.log(1);
// setTimeout(function timer() {
//   console.log(3);
// }, 0);
// console.log(2);
// console.log(4);

const idTimeout1 = setTimeout(() => {
  console.log('subscribe!!!');
}, 3000);

sendBtn.addEventListener('click', () => {
  clearTimeout(idTimeout1);
});



