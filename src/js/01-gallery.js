import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line
const galleryImg = document.querySelector('.gallery');

function galleryCreate() {
  let galleryItem = [];

  galleryItems.forEach((e, idx) => {
    const { original, preview, description } = galleryItems[idx];
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    li.classList.add('gallery__item');
    a.classList.add('gallery__link');
    img.classList.add('gallery__image');

    a.setAttribute('href', original);
    img.setAttribute('src', preview);
    img.setAttribute('data-source', original);
    img.setAttribute('alt', description);

    li.append(a);
    a.append(img);

    galleryItem.push(li);
  });

  galleryImg.append(...galleryItem);
}
// galleryImg.addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   const keyListener = ({ key }) => {
//     if (key === 'Escape') {
//       instance.close();
//     }
//   };

//   const instance = basicLightbox.create(
//     `<img src="${e.target.dataset.source}">`,
//     {
//       onShow: instance => {
//         document.addEventListener('keydown', keyListener);
//       },
//       onClose: instance => {
//         document.removeEventListener('keydown', keyListener);
//       },
//     }
//   );

//   instance.show();
// });

galleryCreate();
console.log(simpleLightbox);
console.log(galleryItems);
