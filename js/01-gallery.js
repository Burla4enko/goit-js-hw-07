import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.innerHTML = galleryItems
  .map(({ preview, original, description } = {}) => {
    const markup = `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;

    return markup;
  })
  .join("");

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keyup", closeElementByEsc);
      },
      onClose: () => {
        document.removeEventListener("keyup", closeElementByEsc);
      },
    }
  );

  instance.show();

  function closeElementByEsc(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}

refs.gallery.addEventListener("click", openModal);
