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
            store.currentPage += 1; 
            await getMovieData(store.searchText, store.currentPage);
        }
        if (/«/.test(document.querySelector('.error__text').textContent)) {
            document.querySelector('.fa-circle-o-notch').style = "display: none;";
            // await updateSwiper();
        } else updateSwiper('clean');
        
        store.isSearch = false;
    }) ;

    document.querySelector('.reset').addEventListener('click', () => {
        document.querySelector('.input-area').value = '';
    });
    return store.isSearch;
}

function prob(a, b) {
    return a + b;
}

export {search, prob};