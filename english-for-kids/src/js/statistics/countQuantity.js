import store from '../store/store';
import updateTable from './updateTable';

function countQuantity(targetWord, result) {
    store.statistics.forEach((elem) => {
        if (elem.word === targetWord) {
            if (store.mode === 'train') {
                elem.train += 1;
            } else if (store.mode === 'play' && result === 'correct') {
                elem.correct += 1;
                elem.percent = Math.round(elem.wrong / (elem.wrong + elem.correct) * 100);
            } else if (store.mode === 'play' && result === 'wrong') {
                elem.wrong += 1;
                elem.percent = Math.round(elem.wrong / (elem.wrong + elem.correct) * 100);
            }
        }
    })
    updateTable();
}

export default countQuantity;