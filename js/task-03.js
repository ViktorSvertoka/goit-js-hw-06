const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const newTags =
  '<li class="item"><img src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="White and Black Long Fur Cat" width="270" class="picture"><img></li><li class="item"><img src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Orange and White Koi Fish Near Yellow Koi Fish" width="270" class="picture"><img></li><li class="item"><img src="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Group of Horses Running" width="270" class="picture"><img></li>';

galleryList.insertAdjacentHTML('beforeend', newTags);

// const listItem1 = document.createElement('li');
// listItem1.classList.add('item');

// const listItem2 = document.createElement('li');
// listItem2.classList.add('item');

// const listItem3 = document.createElement('li');
// listItem3.classList.add('item');

// const imageEl1 = document.createElement('img');
// imageEl1.classList.add('picture');
// imageEl1.src =
//   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imageEl1.alt = 'White and Black Long Fur Cat';
// imageEl1.width = 270;

// const imageEl2 = document.createElement('img');
// imageEl2.classList.add('picture');
// imageEl2.src =
//   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imageEl2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
// imageEl2.width = 270;

// const imageEl3 = document.createElement('img');
// imageEl3.classList.add('picture');
// imageEl3.src =
//   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imageEl3.alt = 'Group of Horses Running';
// imageEl3.width = 270;

// listItem1.appendChild(imageEl1);
// listItem2.appendChild(imageEl2);
// listItem3.appendChild(imageEl3);

// const galleryList = document.querySelector('.gallery');
// // galleryList.prepend(listItem1, listItem2, listItem3);
