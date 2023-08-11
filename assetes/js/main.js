'use strict';
const root = document.getElementById('root');

const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');

const sectionContainer = document.createElement('section');
sectionContainer.classList.add('actors-container');
divWrapper.append(sectionContainer);

const h1 = document.createElement('h1');
h1.classList.add('actors-title');
h1.innerText = 'Actors';

const ulActors = document.createElement('ul');
ulActors.classList.add('actors-list');

sectionContainer.append(h1, ulActors);

//для кожного актора створити картку актора
function createActorCard(actor){
  const li = document.createElement('li');
}
//map -> масив карток
const arrayCards = actors.map((actor)=>createActorCard(actor))
ulActors.append(...arrayCards);

root.append(divWrapper);
