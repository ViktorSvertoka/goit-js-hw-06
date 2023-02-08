const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItem1 = document.createElement('li');
listItem1.classList.add('item');
listItem1.textContent = 'Potatoes';

const listItem2 = document.createElement('li');
listItem2.classList.add('item');
listItem2.textContent = 'Mushrooms';

const listItem3 = document.createElement('li');
listItem3.classList.add('item');
listItem3.textContent = 'Garlic';

const listItem4 = document.createElement('li');
listItem4.classList.add('item');
listItem4.textContent = 'Tomatos';

const listItem5 = document.createElement('li');
listItem5.classList.add('item');
listItem5.textContent = 'Herbs';

const listItem6 = document.createElement('li');
listItem6.classList.add('item');
listItem6.textContent = 'Condiments';

const listEl = document.querySelector('#ingredients');
listEl.prepend(
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  listItem6,
);

// listEl.insertBefore(listItem1, listEl.children[0]);
// listEl.insertBefore(listItem2, listEl.children[1]);
// listEl.insertBefore(listItem3, listEl.children[2]);
// listEl.insertBefore(listItem4, listEl.children[3]);
// listEl.insertBefore(listItem5, listEl.children[4]);
// listEl.insertBefore(listItem6, listEl.children[5]);
