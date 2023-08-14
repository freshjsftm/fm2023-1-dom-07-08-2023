'use strict';

const textForm = document.getElementById('textForm');
const textInput = textForm.textInput;
const sendBtn = document.getElementById('sendBtn');
//const textForm = document.forms.textForm;

// sendBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   if (Math.random() > 0.5) {
//     textForm.dispatchEvent(new Event('submit'));
//   }
//   console.log('btn -> ', event.type);
// });

textForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    target: {
      textInput: { value: valueTextInput },
    },
  } = event;
  console.log(valueTextInput);
});
