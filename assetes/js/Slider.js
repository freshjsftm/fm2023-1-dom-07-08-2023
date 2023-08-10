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
  'https://upload.wikimedia.org/wikipedia/commons/2/27/Commander_%28Biden_dog%29_in_February_2022.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/best-guard-dogs-1588364974.jpg',
  'https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-157603003-e1690769397327.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzU9eNjsEXgiMUr1pFn2riqug-fle6gyJmcHtqSVOuGfXj472raQa8wD9H5a58H1ptsHs&usqp=CAU',
];

const slider = new Slider(imagesDB);

const img = document.querySelector('.slide>img');
const [prevBtn, nextBtn] = document.querySelectorAll(
  '.slider-container>button'
);

img.src = slider.currentSlide;

const btnHandler =
  (direction = 'next') =>
  () => {
    slider.currentIndex = slider[direction];
    img.src = slider.currentSlide;
  };

nextBtn.addEventListener('click', btnHandler('next'));
prevBtn.addEventListener('click', btnHandler('prev'));

const [sliderContainer] = document.getElementsByClassName('slider-container');

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
