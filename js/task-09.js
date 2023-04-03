const buttonChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', onColorSubmit);

function onColorSubmit(event) {
  const colorBody = getRandomHexColor();
  body.style.backgroundColor = colorBody;
  spanColor.textContent = colorBody;
 }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
