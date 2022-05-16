const categoryQuantity = document.querySelector('#categories');
const categoryList = document.querySelectorAll('h2');
const elementsList = document.querySelectorAll('.item ul');

let categories = {};

const createObject = (category, elements) => {
  const categoryName = [];
  const elementsQuantity = [];

  for (const key of category) {
    categoryName.push(key.textContent);
  }

  for (const key of elements) {
    elementsQuantity.push(key.children.length);
  }

  const objB = categoryName.map((item, index) => {
    return { 'name': item, 'items': elementsQuantity[index] }
  });

  return categories = objB;
};  

const makeLog = (obj) => {
  console.log('Number of categories:', categoryQuantity.children.length);
  for (const key of obj) {
    console.log('Category:', key.name);
    console.log('Elements:', key.items);
  }
};

createObject(categoryList, elementsList);
makeLog(categories);
console.log(makeLog);