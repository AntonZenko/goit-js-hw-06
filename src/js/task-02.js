const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newlistItems = document.querySelector('#ingredients');

const createItems = array => {
  return array.map(option => {
    const liElement = document.createElement('li');
    liElement.textContent = option;
    liElement.classList.add('item');
    return liElement;
  });
}

const items = createItems(ingredients);

newlistItems.append(...items);
console.log(items);