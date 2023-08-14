'use strict';

const messageArray = [];
const textForm = document.getElementById('textForm');
const messages = document.getElementById('messages');

textForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    target: {
      textInput: { value: valueTextInput },
    },
  } = event;
  const prepareValue = valueTextInput.trim();
  if (prepareValue) {
    messageArray.push(prepareValue);
    const pMessage = createElement(
      'p',
      {},
      document.createTextNode(prepareValue)
    );
    //textForm.insertAdjacentElement('afterend', pMessage);
    messages.append(pMessage);
    console.log(messageArray);
    textForm.reset();
  }
});
