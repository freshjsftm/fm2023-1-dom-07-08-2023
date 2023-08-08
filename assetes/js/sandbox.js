'use strict';
//замикання
// let value = 1000;
// {
//   let value2 = 10;

//   {
//     let value = 33;
//     function log() {
//       console.log('log value in log():', value, value2);
//     }
//   }
// }

// log();

// function wrapper() {
//   let value = 20;
//   console.log('log value in wrapper():', value);
//   let value2 = 20;
//   log();
// }

// wrapper();

// console.log('log value in sanbox:', value);

function createCounter(start = 0) {
  let count = start;
  return function () {
    count++;
    return count;
  }
}

// function createCounter(start = 0) {
//   let count = start;
//   return () => ++count;
// }

// function createCounter(start = 0) {
//   return () => ++start;
// }

//const createCounter =(start = 0) => () => ++start;

let count = 7897897;

const counter1 = createCounter();

console.log(typeof counter1);
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter(100);
console.log(counter2());
console.log(counter2());
console.log(counter2());
