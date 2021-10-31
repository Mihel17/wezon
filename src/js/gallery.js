const photoContainer = document.querySelector('.product__photos');
const mainPhoto = photoContainer.querySelector('.product__full-photo');

const showMainPhoto = () => {
  mainPhoto.style.transition = 'all 0.3s';
  mainPhoto.classList.remove('product__full-photo--animation')
}

const onPhotoContainerClick = (evt) => {
  const photoBtns = photoContainer.querySelectorAll('.product__photo-btn');
  mainPhoto.src = evt.target.src;
  mainPhoto.classList.add('product__full-photo--animation')
  mainPhoto.style.transition = 'none';
  setTimeout(showMainPhoto, 100)

  for (const item of photoBtns) {
    if (evt.target.parentNode == item) {
      item.classList.add('product__photo-btn--active');
    } else {
      item.classList.remove('product__photo-btn--active');
    }
  }
}

photoContainer.addEventListener('click', onPhotoContainerClick);
