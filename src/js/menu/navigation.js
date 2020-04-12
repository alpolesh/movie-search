import cards from "../cards/cards";
import Card from "../cards/card";
import store from "../index";

function navigationLink() {
    document.querySelector('.navigation').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            document.querySelectorAll('.navigation__link').forEach(item => item.classList.remove('navigation__link_active'));
            event.target.classList.add('navigation__link_active');
            cards.forEach((element, index) => {
                if (Object.keys(element)[0] === event.target.innerText) {
                    document.querySelector('.card__container').innerHTML = '';
                    Object.values(cards[index])[0].forEach((item) => {
                        const cart = new Card(item.word, item.image);
                        document.querySelector('.card__container').append(cart);
                        if (event.target.innerText === 'Main Page') {
                            store.currentRoute = 'Main Page';
                        } else {
                            store.currentRoute = 'Play';
                            document.querySelectorAll('.rotate').forEach(el => el.classList.add('rotate-active'));
                        }
                    })
                }
            });
        }
    })
}

export default navigationLink;