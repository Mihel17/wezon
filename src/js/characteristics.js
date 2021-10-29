const characteristicsContainer = document.querySelector('.product__characteristics');
const characteristicsList = characteristicsContainer.querySelector('.product__characteristics-list');
const characteristicBtn = characteristicsContainer.querySelector('.product__characteristics-btn');
const characteristics = characteristicsContainer.querySelector('#characteristics').content.querySelector('.product__characteristics');
const ITEMS_FROM_SERVER = 3;

characteristicBtn.addEventListener('click', () => {
  for (let i = 0; i < ITEMS_FROM_SERVER; i++) {
    const item = characteristics.cloneNode(true);
    characteristicsList.append(item);
  }
})


