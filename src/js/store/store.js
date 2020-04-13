import cards from '../cards/cards';
import Card from '../cards/create_card';

const store = {
    currentRoute: 'Main Page', // 'Main Page' / 'Action (set A)' / ...
    mode: 'train', // 'train' / 'play'
    routes: [
        {
            categoryName: 'Main Page',
            content: []
        }
    ]
}

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

export default store;