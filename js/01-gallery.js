import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`)

const galleryElements = makeGalleryService(galleryItems)
gallery.insertAdjacentHTML('afterbegin', galleryElements)

// gallery events
gallery.addEventListener(`click`, (element) => {

  openModalElement(element)
  preventDefaultSetting(element)
})

// Functions
function makeGalleryService(galleryItems) {
  return galleryItems.map(galleryItem => {
    return ` 
      <div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
          <img 
            class="gallery__image" 
            src="${galleryItem.preview}" 
            alt="${galleryItem.description}" 
            data-source="${galleryItem.original}">
        </a>
      </div>`
  }).join('')
}

function openModalElement(item) {
  if(!item.target.dataset.source) {
    return
  }

  // open Modal
  const instance = basicLightbox.create(`
    <img src="${item.target.dataset.source}" width="800" height="600">
    `)

  instance.show()
  
  // Close on esc
  gallery.addEventListener(`keydown`, (element) => {
    if(element.code === `Escape`) {
      instance.close()
    }
  })
}

function preventDefaultSetting(event) {
  event.preventDefault()
}