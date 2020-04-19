import updateBoard from "../board/updateBoard";
import cards from "../cards/cards";
import store from "../store/store";

function resetTable() {
    document.querySelector('.reset').addEventListener('click', (e) => {
        const statistics = cards.slice();
        statistics.forEach((item) => {
            item.items.forEach((element) => {
                element.train = 0;
                element.correct = 0;
                element.wrong = 0;
                element.percent = 0;
            })
        })
        store.statistics = statistics;
        localStorage.clear();
        updateBoard();
    })
}

export default resetTable;