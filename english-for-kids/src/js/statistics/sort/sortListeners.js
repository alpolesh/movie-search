import sort from './sort';

function sortListeners() {
    // sorting by category
    document.querySelector('thead > tr > th:nth-child(1)').addEventListener('click', () => {
        sort('categoryName');
    })
    // sorting by word
    document.querySelector('thead > tr > th:nth-child(2)').addEventListener('click', () => {
        sort('word');
    })
    // sorting by translation
    document.querySelector('thead > tr > th:nth-child(3)').addEventListener('click', () => {
        sort('translation');
    })
    // sorting by train
    document.querySelector('thead > tr > th:nth-child(4)').addEventListener('click', () => {
        sort('train');
    })
    // sorting by correct
    document.querySelector('thead > tr > th:nth-child(5)').addEventListener('click', () => {
        sort('correct');
    })
    // sorting by wrong
    document.querySelector('thead > tr > th:nth-child(6)').addEventListener('click', () => {
        sort('wrong');
    })
    // sorting by percent
    document.querySelector('thead > tr > th:nth-child(7)').addEventListener('click', () => {
        sort('percent');
    })
}

export default sortListeners;

