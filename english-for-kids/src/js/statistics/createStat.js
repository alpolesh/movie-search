import cards from '../cards/cards';
import store from '../store/store';

function createStat() {
    let statistics = cards.map((item) => {
        item.items.forEach((el) => el.categoryName = item.categoryName);
        return item.items;
    })
    statistics = statistics.flat();
   
    statistics.forEach((element) => {
            element.train = 0;
            element.correct = 0;
            element.wrong = 0;
            element.percent = 0;
    })
    
    if (!localStorage.stat) {
        store.statistics = statistics;
    } else store.statistics = JSON.parse(localStorage.getItem('stat'));
}


  export default createStat;