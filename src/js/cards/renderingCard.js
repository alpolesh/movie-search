import cards from './cards';
import Card from './card';

function renderingCard() {
    Object.values(cards[0])[0].forEach((el, index) => {
      const card = new Card(el.word, el.image);
      document.querySelector('.card__container').append(card);
    //   card.addEventListener('click', (event) => {
    //     document.querySelector('.card__container').innerHTML = '';
    //     Object.values(cards[index+1])[0].forEach((item) => {
    //         const cart = new Card(item.word, item.image);
    //         document.querySelector('.card__container').append(cart);
    //     })
    //   })
    })
  }

  export default renderingCard;