import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import getMovieData from './API/getMovieData';
import updateSwiper from './swiper/updateSwiper';
import swiper from './swiper/createSwiper';


document.querySelector('.search').addEventListener('click', async (e) => {
  store.currentPage = 1;
  store.isSearch = true;
  e.preventDefault();
  store.searchText = document.querySelector('form input').value;
  await getMovieData(store.searchText, store.currentPage);
  await updateSwiper('clean');
  store.isSearch = false;
}) ;

swiper.on('reachEnd', async () => {
  if (!store.isSearch) {
    store.currentPage += 1;
    await getMovieData(store.searchText, store.currentPage);
    await updateSwiper();
  }
});





