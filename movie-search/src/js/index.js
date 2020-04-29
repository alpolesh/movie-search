import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import swiper from './swiper/createSwiper';
import store from './store';
import getMovieTitle from './API/getMovieTitle';
import updateSwiper from './swiper/updateSwiper';


document.querySelector('.search').addEventListener('click', async (e) => {
  e.preventDefault();
  store.searchText = document.querySelector('form input').value;
  await getMovieTitle(store.searchText);
  await updateSwiper();
  
}) ;






