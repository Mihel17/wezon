const characteristicsContainer = document.querySelector('.product__characteristics');
const characteristicsList = characteristicsContainer.querySelector('.product__characteristics-list');
const characteristicBtn = characteristicsContainer.querySelector('.product__characteristics-btn--js');
const characteristics = characteristicsContainer.querySelector('#characteristics').content.querySelector('.product__characteristics-item');
const CHARACTERISTIC = [
  {
    dt: 'term 1',
    dd: 'description 1',
  },
  {
    dt: 'term 2',
    dd: 'description 2',
  },
]

characteristicBtn.addEventListener('click', () => {
  for (let i = 0; i < CHARACTERISTIC.length; i++) {
    const item = characteristics.cloneNode(true);
    item.querySelector('.product__characteristics-term').textContent = `${CHARACTERISTIC[i].dt}`;
    item.querySelector('.product__characteristics-description').textContent = String(CHARACTERISTIC[i].dd);
    characteristicsList.append(item);
  }
  characteristicBtn.remove();
}, { once: true });
