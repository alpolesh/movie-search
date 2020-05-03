import store from './store';
import getMovieData from './API/getMovieData';
import updateSwiper from './swiper/updateSwiper';
import translate from './API/translate';

function search() {
    document.querySelector('.search').addEventListener('click', async (e) => {
        document.querySelector('.fa-circle-o-notch').style = "display: block;";
        document.querySelector('.error__text').textContent = '';
        store.currentPage = 1;
        store.isSearch = true;
        e.preventDefault();
        // check for Russian words
        if (/(^[А-я\s]+)(?!.*[A-z])/.test(store.searchText)) {
            await translate(store.searchText);
        }
        await getMovieData(store.searchText, store.currentPage);
        if (store.totalResults > 10) {
            await function incrPage() {store.currentPage += 1;}(); 
            await getMovieData(store.searchText, store.currentPage);
        }
        await updateSwiper('clean');
        store.isSearch = false;
    }) ;

    document.querySelector('.reset').addEventListener('click', () => {
        document.querySelector('.input-area').value = '';
    });
}

export default search;