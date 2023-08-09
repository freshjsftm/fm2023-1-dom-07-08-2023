'use strict';

const btns = document.querySelectorAll('section>button');

// for (const btn of btns) {
//   btn.addEventListener('click', (event) => {
//     // console.log(event.target.textContent);
//     // console.log(event.target.innerText);
//     // console.log(event.target.innerHTML);
//     // console.dir(event.target.attributes);
//     // console.log(event.target.dataset.color);
//     //console.log(event.target.style);
//     //прописати фоной колір секції
//     event.target.parentElement.style.backgroundColor =
//       event.target.dataset.color;
//   });
// }

for (const btn of btns) {
  btn.addEventListener(
    'click',
    ({
      target: {
        parentElement,
        dataset: { color },
      },
    }) => {
      parentElement.style.backgroundColor = color;
    }
  );
}
