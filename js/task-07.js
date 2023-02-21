//* Завдання 7

//* Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//*  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//*  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
//* <input id="font-size-control" type="range" min="16" max="96" />
//* <span id="text">Abracadabra!</span>

const rangeInput = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

onText.style.fontSize = rangeInput.value + 'px';

const textResizing = () => {
  onText.style.fontSize = `${rangeInput.value}px`;
};

rangeInput.addEventListener('input', textResizing);
