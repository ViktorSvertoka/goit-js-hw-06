//* Завдання 10(виконувати не обов'язково)

//* Напиши скрипт створення і очищення колекції елементів.
//* Користувач вводить кількість елементів в input і натискає кнопку Створити,
//* після чого рендериться колекція.Натисненням на кнопку Очистити,
//* колекція елементів очищається.

//* Створи функцію createBoxes(amount), яка приймає один параметр - число.
//* Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

//* Розміри найпершого <div> - 30px на 30px.
//* Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//* Всі елементи повинні мати випадковий колір фону у форматі HEX.
//* Використовуй готову функцію getRandomHexColor для отримання кольору.

//* Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//* у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();
    document.querySelector('#boxes').appendChild(div);
  }
}

function destroyBoxes() {
  let boxes = document.querySelector('#boxes');
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const input = controls.querySelector('input');

createButton.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
