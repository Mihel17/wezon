const featuresContainer = document.querySelector('.product__features');
const features = featuresContainer.children;

for (const item of features) {
  const featureText = item.querySelector('.product__feature-text');
  featureText.classList.add('visually-hidden');
}

const onFeaturesClick = (evt) => {
  const featureText = evt.target.querySelector('.product__feature-text');
  featureText.classList.toggle('visually-hidden');
}

featuresContainer.addEventListener('click', onFeaturesClick);
