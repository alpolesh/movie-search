import store from '../store/store';
import updateBoard from '../board/updateBoard';

function sort() {
    document.querySelector('thead > tr > th:nth-child(1)').addEventListener('click', (e) => {
        if (!store.sort) {
            store.statistics.sort(function(a,b) {
                if (a.categoryName < b.categoryName) {
                    return 1;
                }
                if (a.categoryName > b.categoryName) {
                    return -1;
                }
                return 0;
            });
            updateBoard();
            store.sort = 1;
        } else {
            store.statistics.sort(function(a,b) {
                if (a.categoryName > b.categoryName) {
                    return 1;
                }
                if (a.categoryName < b.categoryName) {
                    return -1;
                }
                return 0;
            });
            updateBoard();
            store.sort = 0;
        }
    })
}

export default sort;

