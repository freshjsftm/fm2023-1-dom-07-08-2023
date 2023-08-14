'use strict';
const root = document.getElementById('root');

const arrayCards = actors
  .filter((actor) => actor.name && actor.name.trim())
  .map((actor) => createActorCard(actor));
const h1 = createElement(
  'h1',
  { classNames: ['actors-title'] },
  document.createTextNode('Actors')
);
const ulActors = createElement(
  'ul',
  { classNames: ['actors-list'] },
  ...arrayCards
);
const sectionContainer = createElement(
  'section',
  { classNames: ['actors-container'] },
  h1,
  ulActors
);
const divWrapper = createElement(
  'div',
  { classNames: ['wrapper', 'nameclass'] },
  sectionContainer
);

root.append(divWrapper);

//для кожного актора створити картку актора
function createActorCard(actor) {
  const h2Initials = createElement(
    'h2',
    {
      classNames: ['actor-initials'],
      styles: { backgroundColor: stringToColour(actor.name) },
    },
    document.createTextNode(actor.name[0])
  ); // написати функцію, яка приймає ім'я актора і повертає ініціали

  const divPhotoWrapper = createElement(
    'div',
    { classNames: ['actor-photo-wrapper'] },
    h2Initials
  );

  const img = createElement('img', {
    classNames: ['actor-photo'],
    attributes: { src: actor.photo, alt: actor.name },
    events: { load: handleImgLoad(divPhotoWrapper) },
  });

  const h2Name = createElement(
    'h2',
    { classNames: ['actor-name'] },
    document.createTextNode(actor.name)
  );
  const pDesc = createElement(
    'p',
    { classNames: ['actor-description'] },
    document.createTextNode(actor.birthdate || 'month day, year')
  );

  const article = createElement(
    'article',
    { classNames: ['actor-card'] },
    divPhotoWrapper,
    h2Name,
    pDesc
  );
  const li = createElement('li', { classNames: ['actor-item'] }, article);
  return li;
}
