const inputNumber = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  let numberBoxs = Number(inputNumber.value);
  if (numberBoxs > inputNumber.getAttribute("max")) {
    numberBoxs = inputNumber.getAttribute("max");
    inputNumber.value = inputNumber.getAttribute("max");
  }
  createBoxes(numberBoxs);
}
);

buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes (amount) {
   let sizeDivBox = 30;
  const divBoxElem = [];
  for (let i = 0; i < amount; i += 1) {
    let divColor = getRandomHexColor();
    divBoxElem.push(`<div style ="background-color:${divColor}; width:${sizeDivBox}px; height:${sizeDivBox}px;"></div>`);
    sizeDivBox += 10;
  }
  divBoxes.insertAdjacentHTML("beforeend", divBoxElem.join(""));
}

function destroyBoxes () {
  divBoxes.innerHTML = "";
  inputNumber.value = "";
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
