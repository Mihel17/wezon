const featuresContainer = document.querySelector('.product__features');
const features = featuresContainer.children;

for (const item of features) {
  const featureText = item.querySelector('.product__feature-text');
  featureText.classList.add('hidden');
}

const onFeaturesClick = (evt) => {
  evt.target.querySelector('.product__feature-text').classList.toggle('hidden');
  evt.target.querySelector('.product__feature-arrow').classList.toggle('product__feature-arrow--open');
}

featuresContainer.addEventListener('click', onFeaturesClick);
