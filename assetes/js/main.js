'use strict';

const url = 'http://127.0.0.1:5500/assetes/js/data.json';
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (const user of data) {
      console.log(user.firstName);
    }
  })
  .catch((error)=>{
    console.log(error);
  })
