import store from '../store/store';

function updateTable() {
    const json = JSON.stringify(store.statistics);
    localStorage.setItem('stat', json);
}

export default updateTable;