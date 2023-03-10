import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`)

const galleryElements = makeGalleryService(galleryItems)
gallery.insertAdjacentHTML('afterbegin', galleryElements)

function makeGalleryService(galleryItems) {
    return galleryItems.map(galleryItem => {
      return ` 
          <a class="gallery__item" href="${galleryItem.original}">
            <img 
              class="gallery__image" 
              src="${galleryItem.preview}" 
              alt="${galleryItem.description}" 
          </a>`
    }).join('')
  }

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData : 'alt',
  captionDelay : 250
})
