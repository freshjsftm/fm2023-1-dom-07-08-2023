'use strict';

const unique = document.getElementById('unique');

// unique.setAttribute('title', 'new title text');

// if (unique.hasAttribute('ref')) {
//   unique.removeAttribute('ref');
// }

const attrTitle = document.createAttribute('title');
attrTitle.value = 'new title text for attr';
unique.setAttributeNode(attrTitle);
