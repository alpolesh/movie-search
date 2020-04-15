import store from '../store/store';
import cards from '../cards/cards';
import Card from '../cards/createCard';

function createBoard() {
    cards.forEach((item) => {
        const {categoryName} = item;
        store.routes.push({
            categoryName,
            content: item.items.map((element, index) => {
                if (index === 0) {
                    store.routes[0].content.push(new Card(element, categoryName));
                }
                return new Card(element);
            })
        })
    })
}

export default createBoard;