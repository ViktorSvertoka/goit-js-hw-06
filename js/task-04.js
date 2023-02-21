//* Завдання 4

//* Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//* Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//* Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//* Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});

//? Как достучаться к свойству тега в HTML
//? id - #header-btn (через решетку "хештег")
//? class - .header-btn (через точку)
//? атрибут - [type, data-action], пример [type="button"]
