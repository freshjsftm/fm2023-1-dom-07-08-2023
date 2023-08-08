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
  next() {
    return (this._currentIndex + 1) % this._collection.length;
  }
  prev() {
    return (
      (this._currentIndex - 1 + this._collection.length) %
      this._collection.length
    );
  }
}
