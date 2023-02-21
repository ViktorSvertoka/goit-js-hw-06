//* Завдання 8

//* Напиши скрипт управління формою логіна.
//* Обробка відправлення форми form.login-form
//* повинна відбуватися відповідно до події submit.
//* Під час відправлення форми сторінка не повинна перезавантажуватися.
//* Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//* що всі поля повинні бути заповнені.
//* Якщо користувач заповнив усі поля і відправив форму,
//* збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
//* а значення поля - значенням властивості.
//* Для доступу до елементів форми використовуй властивість elements.
//* Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {};
  for (const element of formLogin.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }
  if (formData.email && formData.password) {
    console.log(formData);
    formLogin.reset();
  } else {
    alert('Всі поля повинні бути заповнені');
  }
});
