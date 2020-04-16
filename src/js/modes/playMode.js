import store from '../store/store';
import updateBoard from '../board/updateBoard';

function playMode() {
    document.querySelector('.track').addEventListener('click', () => {
        store.isGameStarted = false;
        if (store.mode === 'train') {
            store.mode = 'play';
        } else store.mode = 'train';
        
        updateBoard();
    })
}


export default playMode;