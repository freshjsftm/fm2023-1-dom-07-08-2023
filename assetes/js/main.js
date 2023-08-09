'use strict';

const unique = document.getElementById('unique');

const log44 = () => {
  console.log(44);
  unique.removeEventListener('click', log44);
};

unique.addEventListener('click', log44);
unique.addEventListener(
  'click',
  () => {
    console.log('qwewqe');
  },
  { once: true }
);
unique.dispatchEvent(new MouseEvent('click'));

const ownEvent = new Event('myEventType');
unique.addEventListener('myEventType', () => {
  console.log('myEvent');
});

if (Math.random() > 0.5) {
  unique.dispatchEvent(ownEvent);
}
