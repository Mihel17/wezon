const reviews = require('./reviews.json');
const reviewContainer = document.querySelector('.review__list');
const reviewTemplate = reviewContainer.querySelector('.review__item');
const reviewBtn = document.querySelector('.review__button');

reviewBtn.addEventListener('click', () => {
  for (const item of reviews) {
    const review = reviewTemplate.cloneNode(true);
    review.querySelector('.review__name').textContent = item.name;
    review.querySelector('.review__date').textContent = item.date;
    review.querySelector('.review__text').textContent = item.review;
    review.classList.add('review__item--js')

    for (let i = 0; i < item.rating; i++) {
      const rating = review.querySelector('.review__rating').children;
      rating[i].classList.add('product__rating-star--active')
      console.log(`${item.name} ${item.rating} ${rating[i]}`)
    }

    reviewContainer.append(review);
    reviewBtn.addEventListener('click', (onReviewBtnClick));
  }
  reviewBtn.textContent = 'Свернуть'
}, { once: true });

const onReviewBtnClick = () => {
  document.querySelector('.review__item:nth-child(2)').classList.toggle('border')
  document.querySelectorAll('.review__item--js').forEach((item) => {
    item.classList.toggle('hidden')
    if (item.classList.contains('hidden')) {
      reviewBtn.textContent = 'Показать еще'
    } else {
      reviewBtn.textContent = 'Свернуть'
    }
  });
}

