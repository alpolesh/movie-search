import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/swiper/css/swiper.min.css';

import store from './store';
import getMovieData from './API/getMovieData';
import updateSwiper from './swiper/updateSwiper';
import swiper from './swiper/createSwiper';
import {search} from './search';
import Keyboard from './virtualKeyboard';

updateSwiper('clean');
search();
document.querySelector('.input-area').focus();
Keyboard.init();

// Switch keyboard
document.querySelector('.keyboard-button').addEventListener('click', (e) => {
  if (!e.target.classList.contains('keyboard-button')) return;
  if (!store.isKeyboard) {
    document.querySelector('.keyboard').style = 'display: flex;'
    store.isKeyboard = true;
  } else {
    store.isKeyboard = false;
    document.querySelector('.keyboard').style = 'display: none;'
  } 
})

document.querySelector('.input-area').addEventListener('input', () => {
  store.searchText = document.querySelector('.input-area').value;
});

swiper.on('slideChange', async () => {
  if (!store.isSearch) {
    if ((Math.floor(swiper.activeIndex / 10) + 1) === store.currentPage && store.totalResults > 10) {
      store.dataBase = [];
      store.currentPage += 1;
      await getMovieData(store.searchText, store.currentPage);
      await updateSwiper();
    }
  }
});



