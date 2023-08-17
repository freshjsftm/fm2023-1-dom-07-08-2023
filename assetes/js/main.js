'use strict';

const myPromise1 = new Promise(executor);

function executor(resolve, reject) {
  Math.random() > 0.5 ? resolve('data123') : reject('not');
}

myPromise1
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(myPromise1);

// setTimeout(callback, ms)

// timeout(ms).then(callback)

function timeout(ms, msg = 'hi') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, ms);
  });
}

timeout(1000, 'qwe')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(3);
  });

function loadImage(path) {
  const img = new Image();
  img.src = path;
  return new Promise((resolve, reject) => {
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('path invalid'));
    });
  });
}

loadImage('https://www.filmibeat.com/img/popcorn/profile_photos/tom-cruise-20190610151455-4602.jpg')
  .then((elem) => {
    document.body.append(elem);
  })
  .catch((error) => {
    console.log(error);
  });
