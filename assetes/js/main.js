'use strict';

// const patternName = /^[A-Z][a-z]{1,15}$/g;
// const patternName = new RegExp(/^[A-Z][a-z]{1,15}$/, "g");
const patternName = new RegExp('^[A-Z][a-z]{1,15}$', 'g');
const pattern1 = /[а-я]/gi;
const patternTwoNumber = new RegExp('^(\\d{2})$', 'g');
//інпут з тайпом намбер валідувати на 2 цифри

const usersArray = [];
const textForm = document.getElementById('textForm');
const messages = document.getElementById('messages');
const sendBtn = document.getElementById('sendBtn');
const textInput = textForm.textInput;
const numberInput = textForm.numberInput;

textInput.focus();
textInput.select();
sendBtn.disabled = true;

const logEventType = (event) => {
  console.log(event.type, event.target)
  if(pattern1.test(event.target.value)){
    event.target.style.color='red'
    sendBtn.disabled = true;
  }
  else{
    event.target.style.color=''
    sendBtn.disabled = false;
  }
}

numberInput.addEventListener('input', ({target})=>{
  if(patternTwoNumber.test(target.value)){
    target.style.color=''
    sendBtn.disabled = false;
  }else{
    target.style.color='red'
    sendBtn.disabled = true;
  }
})

// textInput.addEventListener('focus', logEventType);
// textInput.addEventListener('blur', logEventType);
// textInput.addEventListener('change', logEventType);
// textInput.addEventListener('copy', logEventType);
// textInput.addEventListener('cut', logEventType);
// textInput.addEventListener('paste', logEventType);
textInput.addEventListener('input', logEventType);
// textInput.addEventListener('select', logEventType);


textForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    target: {
      textInput: { value: valueTextInput },
    },
  } = event;
  const prepareValue = valueTextInput.trim();
  if (patternName.test(prepareValue) && !usersArray.includes(prepareValue)) {
    event.target.textInput.style.backgroundColor = '';
    usersArray.push(prepareValue);
    const pMessage = createElement(
      'p',
      {},
      document.createTextNode(prepareValue)
    );
    //textForm.insertAdjacentElement('afterend', pMessage);
    messages.append(pMessage);
    console.log(usersArray);
    textForm.reset();
  } else {
    event.target.textInput.style.backgroundColor = 'pink';
    event.target.textInput.value = '';
  }
});

const str =
  'The test() 1956method of RegExp instances executes a search with this regular 20expression for a match between a regular expression and a specified string. Returns 546true if there is a match; false otherwise.';

const pattern2 = /\b[a-z]{3}\b/gi;

// const pattern3 = /(\d+)([a-z]+)/g;

const pattern3 = new RegExp("(\\d+)([a-z]+)", "g");

const replaseStr = str.replace(pattern3, '$2 $1');
