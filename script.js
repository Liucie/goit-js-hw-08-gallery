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
// console.log('makeGalleryMarkup', makeGalleryMarkup)
    

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  modalImage: document.querySelector('.lightbox__image'),
  closeModalBtn: document.querySelector('[data-action="close-lightbox"]')
}
 


refs.galleryList.insertAdjacentHTML('beforeend', makeGalleryMarkup);


function onGalleryListClick(e) {
  e.preventDefault();
  
    if (e.target.nodeName !== "IMG") {
        return;
  }
  
  refs.modal.classList.add('is-open');
  refs.modalImage.src = e.target.dataset.source;
  refs.modalImage.alt = e.target.alt;
  window.addEventListener('keydown', OnEscKeydown);
}

function onCloseModal(e) {
  refs.modal.classList.remove('is-open');
  removeSrcImage();
}

function OnEscKeydown(e) {
  if (e.key ==='Escape' ) {
    onCloseModal();
  }
}

function removeSrcImage() {
  refs.modalImage.src = "";
}

refs.galleryList.addEventListener('click', onGalleryListClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);



