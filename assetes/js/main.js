'use strict';

const sendBtn = document.getElementById('sendBtn');
// sendBtn.addEventListener('click', () => {});

//функція, яка поступово через півсекунди виводить в консоль числа від 1 до 10

function counter() {
  let count = 1;
  const idInterval = setInterval(
    () => {
      console.log(count++);
      for(let i=0; i<10000;i++){
        for(let j=0; j<10000;j++){}
      }
      if (count > 10) {
        clearInterval(idInterval);
        console.timeEnd('counter')
      }
    }, 
  1000);
}

console.time('counter')
counter()