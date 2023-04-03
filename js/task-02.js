const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const listEL = document.querySelector('#ingredients');
// for (const ingredient of ingredients) {
//   const liEl = document.createElement("li");
//   // liEl.textContent = ingredient;
//   const text = document.createTextNode(ingredient);
//   liEl.appendChild(text);
//   liEl.classList.add('item');
//   listEL.appendChild(liEl);
// }

// *===map===
const listEL = document.querySelector('#ingredients');
const markup = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add('item');

  return liEl
});

listEL.append(...markup);

console.log(listEL);