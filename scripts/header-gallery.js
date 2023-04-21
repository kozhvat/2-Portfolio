const HEADER_GALLERY_ACTIVE_SLIDE_CLASSNAME = 'header-gallery__item_active';

const headerGallerySlidesNodes = Array.from(
  document.querySelectorAll('.header-gallery__item')
);
console.log(headerGallerySlidesNodes);
const headerGalleryPrevButtonNode = document.querySelector(
  '.header-gallery__button-back'
);
const headerGalleryNextButtonNode = document.querySelector(
  '.header-gallery__button-next'
);
let activeId;

init();

function init() {
  activeId = 0;

  headerGalleryPrevButtonNode.addEventListener('click', () => {
    setActiveSlideById(getPrevId());
  });

  headerGalleryNextButtonNode.addEventListener('click', () => {
    setActiveSlideById(getNextId());
  });
}

function setActiveSlideById(id) {
  const currentId = activeId;
  activeId = id;

  headerGallerySlidesNodes[currentId].classList.remove(
    HEADER_GALLERY_ACTIVE_SLIDE_CLASSNAME
  );
  headerGallerySlidesNodes[activeId].classList.add(
    HEADER_GALLERY_ACTIVE_SLIDE_CLASSNAME
  );
}

function getPrevId() {
  return activeId === 0 ? headerGallerySlidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
  return activeId === headerGallerySlidesNodes.length - 1 ? 0 : activeId + 1;
}
