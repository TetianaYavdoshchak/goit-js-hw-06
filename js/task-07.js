const inputValue = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = `${inputValue.value}px`

inputValue.addEventListener('input', event => 
spanText.style.fontSize = `${event.currentTarget.value}px`);