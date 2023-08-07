// console.log(window.document);
// console.dir(window.document);

function showAlert() {
  alert('Achivement unlocked!');
}

/*
   element.addEventListener(type, listener)

   button.addEventListener('click', showAlert)
*/

// const buttons = document.getElementsByTagName('button'); //HTMLCollection
// const buttons2v = document.querySelectorAll('button');   //NodeList
// console.log(buttons);
// console.log(buttons2v);
// const [, button] = document.getElementsByTagName('button');
const button = document.querySelector('h1+button');
console.log(button);
console.dir(button);
button.addEventListener('click', showAlert);

// const uniqueDiv = document.getElementById('uniqueDiv');   //O(1)
// // const uniqueDiv = document.querySelector('#uniqueDiv');//O(n)
// console.log(uniqueDiv);
// console.dir(uniqueDiv);
// uniqueDiv.addEventListener('click', showAlert);


