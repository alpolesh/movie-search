import store from '../store/store';
import updateBoard from '../board/updateBoard';

function play() {
    document.querySelector('.track').addEventListener('click', () => {
        if (store.mode === 'train') {
            store.mode = 'play';
        } else store.mode = 'train';
        
        updateBoard();
    })
}


export default play;