'use strict';

const socials = new Map();
socials.set('www.facebook.com', './assetes/icons/facebook.svg');

const root = document.getElementById('root');

fetch('./assetes/js/data.json')
  .then((response) => response.json())
  .then((actors) => {
    console.table(actors);
    const actorItems = actors.map((actor) => createActorItem(actor));
    root.append(...actorItems);
  })
  .catch((error) => {
    console.log(error);
    root.append('try again!');
  });

function createActorItem({ firstName, lastName, profilePicture, contacts }) {
  const links = contacts.map((contact) =>
    {
      const hostname = new URL(contact).hostname
      const img = createElement('img', {attributes:{src:socials.get(hostname)}})
      return createElement('a', {}, img)
    }
  );
  const h3 = createElement('h3', {}, firstName + ' ' + lastName);
  const article = createElement(
    'article',
    { styles: { border: '1px solid red' } },
    h3,
    ...links
  );
  const liItem = createElement('li', {events:{'click': ()=>{}}}, article);
  return liItem;
}
