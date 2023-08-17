'use strict';

function handlePromise(promise) {
  return promise
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}


const value = 22;

const promiseValue = new Promise((resolve, reject)=>{
  resolve(value)
})

handlePromise(promiseValue);
handlePromise(Promise.resolve(44));
handlePromise(Promise.reject('error'));