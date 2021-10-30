const cartLimk = document.querySelector('.action-bar__item--cart .action-bar__link');
const cartModal = document.querySelector('.cart-modal');

cartLimk.addEventListener('click', (evt) => {
  evt.preventDefault();
  cartModal.classList.toggle('cart-modal--hidden-js');
});
