import store from '../../store/store';
import updateBoard from '../../board/updateBoard';

function sort(cell) {
    if (!store.sort) {
        store.statistics.sort((a,b) =>{
            if (a[cell] < b[cell]) {
                return 1;
            }
            if (a[cell] > b[cell]) {
                return -1;
            }
            return 0;
        });
        updateBoard();
        store.sort = 1;
    } else {
        store.statistics.sort((a,b) =>{
            if (a[cell] > b[cell]) {
                return 1;
            }
            if (a[cell] < b[cell]) {
                return -1;
            }
            return 0;
        });
        updateBoard();
        store.sort = 0;
    }
}

export default sort;