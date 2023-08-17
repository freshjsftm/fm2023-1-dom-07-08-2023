'use strict';
console.log('start');
setTimeout(
  () => { //macro
  console.log('setTimeout1');
}, 0);
setTimeout(
  () => { //macro
  console.log('setTimeout2');
}, 0);
const promise = new Promise((resolve, reject) => {
  console.log('promise start');
  resolve();
  reject();
  console.log('promise end');
});
promise
  .then(
    () => { //micro
    console.log('then resolve');
  })
  .catch(() => {
    console.log('catch reject');
  })
  .finally(
    () => { //micro
    console.log('finally');
  });
console.log('end');
