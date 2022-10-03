import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.innerHTML = galleryItems
  .map(({ preview, original, description } = {}) => {
    const markup = `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

    return markup;
  })
  .join("");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
