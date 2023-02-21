//* Завдання 6

//* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//* перевіряє його вміст щодо правильної кількості введених символів.
//* Яка кількість символів повинна бути в інпуті,
//* зазначається в його атрибуті data - length.
//* Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//* якщо неправильна кількість - червоним.
//* Для додавання стилів використовуй CSS-класи valid і invalid,
//* які ми вже додали у вихідні файли завдання.

const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
});

//? Властивість інтерфейсу dataset надає доступ
//? для читання / запису до настроюваних атрибутів даних(data -*) елементів.
//? Він відкриває карту рядків із записом для кожного data -* атрибута.

//? Властивість classList лише для читання, яка повертає class атрибутів елемента.
//? Потім це можна використовувати для маніпулювання списком класів.
