import { galleryItems } from "./app.js";

const makeGalleryItemMarkup = item => {
    const { preview, original, description } = item;
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
}
const makeGalleryMarkup = galleryItems
    .map(makeGalleryItemMarkup)
  .join('');
console.log('makeGalleryMarkup', makeGalleryMarkup)
    

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  modalImage: document.querySelector('.lightbox__image'),
}
 


refs.galleryList.insertAdjacentHTML('beforeend', makeGalleryMarkup);


function onGalleryListClick(e) {
  e.preventDefault();
  
    if (e.target.nodeName !== "IMG") {
        return;
    }
  refs.modal.classList.toggle('.is-open');
  refs.modalImage.src = e.target.dataset.source;
  console.log(refs.modalImage.src);
  refs.modalImage.alt = e.target.alt;
}

refs.galleryList.addEventListener('çlick', onGalleryListClick);


