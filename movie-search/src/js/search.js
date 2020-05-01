import store from './store';
import getMovieData from './API/getMovieData';
import updateSwiper from './swiper/updateSwiper';

function search() {
    document.querySelector('.search').addEventListener('click', async (e) => {
        document.querySelector('.fa-circle-o-notch').style = "display: block;";
        document.querySelector('.error__text').textContent = '';
        // store.dataBase = [];
        store.currentPage = 1;
        store.isSearch = true;
        e.preventDefault();
        await getMovieData(store.searchText, store.currentPage);
        await function incrPage() {store.currentPage += 1;}(); 
        await getMovieData(store.searchText, store.currentPage);
        await updateSwiper('clean');
        store.isSearch = false;
    }) ;

    document.querySelector('.reset').addEventListener('click', () => {
        document.querySelector('.input-area').value = '';
    });
}

export default search;