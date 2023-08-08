'use strict';
const imagesDB = [
  'https://upload.wikimedia.org/wikipedia/commons/2/27/Commander_%28Biden_dog%29_in_February_2022.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/best-guard-dogs-1588364974.jpg',
  'https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-157603003-e1690769397327.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzU9eNjsEXgiMUr1pFn2riqug-fle6gyJmcHtqSVOuGfXj472raQa8wD9H5a58H1ptsHs&usqp=CAU',
];

const slider = new Slider(imagesDB);

const img = document.querySelector('.slide>img');
const [prevBtn, nextBtn] = document.querySelectorAll('.slider-container>button');

img.src = slider.currentSlide;


console.log(slider.currentSlide)