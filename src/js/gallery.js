const photoContainer = document.querySelector('.product__photos');
const mainPhoto = photoContainer.querySelector('.product__full-photo');

const onPhotoContainerClick = (evt) => {
  const photoBtns = photoContainer.querySelectorAll('.product__photo-btn');
  mainPhoto.src = evt.target.src;

  for (const item of photoBtns) {
    if (evt.target.parentNode == item) {
      item.classList.add('product__photo-btn--active');
    } else {
      item.classList.remove('product__photo-btn--active');
    }
  }
}

photoContainer.addEventListener('click', onPhotoContainerClick);
