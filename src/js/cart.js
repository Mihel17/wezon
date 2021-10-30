const cartItem = document.querySelector('.action-bar__item--cart');
const cartLink = cartItem.querySelector('.action-bar__item--cart .action-bar__link');
const cartModal = document.querySelector('.cart-modal');

cartLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  cartItem.classList.toggle('action-bar__item--active');
  cartModal.classList.toggle('cart-modal--hidden-js');
});
