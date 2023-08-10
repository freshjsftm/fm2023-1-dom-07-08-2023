class Slider {
  constructor(collection = [], currentIndex = 0) {
    this.collection = collection;
    this.currentIndex = currentIndex;
  }
  get collection() {
    return this._collection;
  }
  set collection(collection) {
    if (Array.isArray(collection)) {
      this._collection = collection;
      return;
    }
    throw new TypeError('collection must be array');
  }
  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(currentIndex) {
    if (typeof currentIndex !== 'number') {
      throw new TypeError('currentIndex must be number');
    }
    if (currentIndex < 0 || Number.isInteger(currentIndex) === false) {
      throw new RangeError('currentIndex must be integer positive');
    }
    this._currentIndex = currentIndex;
  }
  get currentSlide() {
    return this._collection[this._currentIndex];
  }
  get next() {
    return (this._currentIndex + 1) % this._collection.length;
  }
  get prev() {
    return (
      (this._currentIndex - 1 + this._collection.length) %
      this._collection.length
    );
  }
}

const imagesDB = [
  [
    'https://upload.wikimedia.org/wikipedia/commons/2/27/Commander_%28Biden_dog%29_in_February_2022.jpg',
    'dog 1',
  ],
  [
    'https://hips.hearstapps.com/hmg-prod/images/best-guard-dogs-1588364974.jpg',
    'dog 2',
  ],
  [
    'https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-157603003-e1690769397327.jpg',
    'dog 3',
  ],
  [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzU9eNjsEXgiMUr1pFn2riqug-fle6gyJmcHtqSVOuGfXj472raQa8wD9H5a58H1ptsHs&usqp=CAU',
    'dog 4',
  ],
];

const slider = new Slider(imagesDB);

const h2Slider = document.createElement('h2');
h2Slider.innerText = 'Title';
// h2Slider.className = 'slider-title';
// h2Slider.className = 'border';
h2Slider.classList.add('slider-title', 'border');
// h2Slider.classList.add('border');

const slide = document.querySelector('.slide');
const img = document.querySelector('.slide>img');
const [prevBtn, nextBtn] = document.querySelectorAll(
  '.slider-container>button'
);
const [sliderContainer] = document.getElementsByClassName('slider-container');

const copyImg = img.cloneNode(); //create copy
const copyH2 = h2Slider.cloneNode(true); //create copy

//sliderContainer.append(h2Slider);
//sliderContainer.prepend(h2Slider);
// sliderContainer.insertBefore(h2Slider, slide);
slide.insertAdjacentElement('beforebegin', h2Slider);
slide.insertAdjacentElement('beforebegin', copyImg);
slide.insertAdjacentElement('beforebegin', copyH2);

const updateSlide = () => {
  const [src, title] = slider.currentSlide;
  img.src = src;
  img.alt = title;
  h2Slider.innerText = title;
};
updateSlide();

const btnHandler =
  (direction = 'next') =>
  () => {
    slider.currentIndex = slider[direction];
    updateSlide();
  };

nextBtn.addEventListener('click', btnHandler('next'));
prevBtn.addEventListener('click', btnHandler('prev'));

sliderContainer.addEventListener('wheel', (event) => {
  const { deltaY } = event;
  event.preventDefault(); // вимикаємо scroll
  if (deltaY > 0) {
    // const handler = btnHandler('next');
    // handler();
    btnHandler('next')();
  } else {
    btnHandler('prev')();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    btnHandler('next')();
  } else if (event.key === 'ArrowRight') {
    btnHandler('prev')();
  }
});
