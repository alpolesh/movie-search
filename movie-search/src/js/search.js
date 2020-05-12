import store from './store';
import getMovieData from './API/getMovieData';
import updateSwiper from './swiper/updateSwiper';
import translate from './API/translate';

function search() {
    document.querySelector('.search').addEventListener('click', async (e) => {
        store.isCollection = false;
        document.querySelector('.fa-circle-o-notch').style = "display: block;";
        document.querySelector('.error__text').textContent = '';
        store.currentPage = 1;
        store.isSearch = true;
        e.preventDefault();
        // check for Russian words
        if (/(^[А-я\s]+)(?!.*[A-z])/.test(store.searchText)) {
            await translate(store.searchText);
        }
        try {
            await getMovieData(store.searchText, store.currentPage);
            if (store.totalResults > 10) {
                store.currentPage += 1; 
                await getMovieData(store.searchText, store.currentPage);
            }
        } catch(err) {
            document.querySelector('.fa-circle-o-notch').style = "display: none;";
            document.querySelector('.error__text').textContent = `«${store.searchText}»: ${err}`;
            store.isSearch = false;
            return 
        }
        store.isSearch = false;
        updateSwiper('clean');
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