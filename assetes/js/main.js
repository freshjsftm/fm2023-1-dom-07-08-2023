'use strict';
const root = document.getElementById('root');

const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');

const sectionContainer = document.createElement('section');
sectionContainer.classList.add('actors-container');
divWrapper.append(sectionContainer);

const h1 = document.createElement('h1');
h1.classList.add('actors-title');
// h1.innerText = 'Actors';
h1.append(document.createTextNode('Actors'));

const ulActors = document.createElement('ul');
ulActors.classList.add('actors-list');

sectionContainer.append(h1, ulActors);

//для кожного актора створити картку актора
function createActorCard(actor) {
  const li = document.createElement('li');
  li.classList.add('actor-item');

  const article = document.createElement('article');
  article.classList.add('actor-card');

  const divPhotoWrapper = document.createElement('div');
  divPhotoWrapper.classList.add('actor-photo-wrapper');

  const img = document.createElement('img');
  img.classList.add('actor-photo');
  // img.src = actor.photo;
  // img.alt = actor.name;
  img.setAttribute('src', actor.photo);
  img.setAttribute('alt', actor.name);

  // img.addEventListener('error', ()=>{
  //   img.remove()
  // })

  const h2Initials = document.createElement('h2');
  h2Initials.classList.add('actor-initials');
  h2Initials.append(document.createTextNode(actor.name[0]));
  h2Initials.style.backgroundColor = stringToColour(actor.name);

  divPhotoWrapper.append(h2Initials);

  img.addEventListener('load', handleImgLoad(divPhotoWrapper));

  const h2Name = document.createElement('h2');
  h2Name.classList.add('actor-name');
  // h2Name.innerText = actor.name;
  h2Name.append(document.createTextNode(actor.name));

  const pDesc = document.createElement('p');
  pDesc.classList.add('actor-description');
  pDesc.append(document.createTextNode(actor.birthdate));

  article.append(divPhotoWrapper, h2Name, pDesc);

  li.append(article);
  return li;
}
//map -> масив карток
const arrayCards = actors.map((actor) => createActorCard(actor));
ulActors.append(...arrayCards);

root.append(divWrapper);

function handleImgLoad(elemParent) {
  return ({ target }) => {
    elemParent.append(target);
  };
}

function stringToColour(str) {
  let hash = 0;
  str.split('').forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += value.toString(16).padStart(2, '0');
  }
  return colour;
}
