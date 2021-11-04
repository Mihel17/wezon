const photoContainer = document.querySelector('.product__photos-list');
const mainPhoto = document.querySelector('.product__full-photo');
const photoBtns = photoContainer.children;
const toTop = document.querySelector('.product__photo-nav--before');
const toBottom = document.querySelector('.product__photo-nav--next');


const showMainPhoto = () => {
  mainPhoto.style.transition = 'opacity 0.3s';
  mainPhoto.classList.remove('product__full-photo--animation')
}
const onPhotoContainerClick = (evt) => {
  mainPhoto.src = evt.target.src;
  mainPhoto.classList.add('product__full-photo--animation')
  mainPhoto.style.transition = 'none';
  setTimeout(showMainPhoto, 100)
  for (const item of photoBtns) {
    if (evt.target == item) {
      item.classList.add('product__photo-btn--active');
    } else {
      item.classList.remove('product__photo-btn--active');
    }
  }
}
photoContainer.addEventListener('click', onPhotoContainerClick);

const hiddeElements = () => {
  for (let i = 0; i < photoBtns.length; i++) {
    photoBtns[i].setAttribute(`data-number`, `${i}`);
    if (photoBtns[i].dataset.number > 3) {
      photoBtns[i].classList.add('product__photo-btn--hidden')
    } else {
      photoBtns[i].classList.remove('product__photo-btn--hidden')
    }
  }
}
hiddeElements()
toTop.addEventListener('click', () => {
  const firstEl = photoBtns[0];
  photoContainer.append(firstEl);
  hiddeElements()
});
toBottom.addEventListener('click', () => {
  const lastEl = photoBtns[photoBtns.length - 1];
  photoContainer.prepend(lastEl);
  hiddeElements()
});
