import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import {openMenu} from './menu/openMenu';
import {closeMenu} from './menu/closeMenu';
import cards from './cards/cards';
import Card from './cards/create_card';
import updateBoard from './board/update_board';
// import navigationLink from './menu/navigation';

// navigationLink();

updateBoard();

// open and close menu
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('burger__container')){
    openMenu();
  } else if (event.target.classList.contains('header__line')) {
    openMenu();
  } else if (event.target.classList.contains('navigation')) {
  // empty
}
  else {
    closeMenu();
  }
});

// Linking between pages
// document.querySelector('.card__container').addEventListener('mouseup', (event) => {
  
//   if (event.target.closest('.card').classList.contains('card')) {
//     cards.forEach((element, index) => {
//       if (Object.keys(element)[0] === event.target.closest('.card').innerText) {
//         document.querySelectorAll('.navigation__link').forEach(item => item.classList.remove('navigation__link_active'));
//         document.querySelectorAll('.navigation__link').forEach((item) => {
//           if (event.target.closest('.card').innerText === item.innerText) {
//             item.classList.add('navigation__link_active');
//           }
//         });
//         store.currentRoute = 'Play';
//         document.querySelector('.card__container').innerHTML = '';
//         Object.values(cards[index])[0].forEach((item) => {
//             const cart = new Card(item.word, item.image);
//             document.querySelector('.card__container').append(cart);
//             document.querySelectorAll('.rotate').forEach(el => el.classList.add('rotate-active'));
//         })
//       }
//     });
//   }
// })

// Play audio
// document.querySelector('.card__container').addEventListener('click', (event) => {
//   if (event.target.closest('.card').classList.contains('card')) {
//     if (store.currentRoute !== 'Main Page') {
//       const audio = new Audio();
//       audio.src = "./audio/bird.mp3";
//       audio.play()
//     }
//   }
// })






