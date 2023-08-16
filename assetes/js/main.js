'use strict';

// const propmise = fetch('http://127.0.0.1:5500/assetes/js/data.json');
// console.log(propmise);

fetch('http://127.0.0.1:5500/assetes/js/data.json')
  .then((response) => response.json())
  .then((data) => {
    console.table(data);  //users
    const users = data;
    //works with users
  })
  .catch((error)=>{
    console.log(error);
  })
  .finally(()=>{
    console.log('finally');
  })

// const promiseResult = propmise.then((response) => {
//   const promiseResult = response.json();
//   return promiseResult;
// });
// promiseResult.then((users) => {
//   console.table(users);
// });

// propmise.then(
//   (response) => {
//     console.log('ok');
//     const promiseResult = response.json();
//     promiseResult.then(
//       (users) => {
//         console.log('ok data');
//         console.table(users);
//       },
//       (error) => {
//         console.log('not data');
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log('not');
//     console.log(error);
//   }
// );
