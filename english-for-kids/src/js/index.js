import '../css/style.css';
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {openMenu} from './menu/openMenu';
import {closeMenu} from './menu/closeMenu';
import createBoard from './board/createBoard';
import updateBoard from './board/updateBoard';
import navigationLink from './menu/navigation';
import playMode from './modes/playMode';
import startGame from './modes/startGame';
import cards from './cards/cards';
import store from './store/store';
import sort from './statistics/sort';


createBoard();
updateBoard();
navigationLink();
playMode();
startGame();
// sort();

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

const statistics = cards.slice();
    statistics.forEach((item) => {
        item.items.forEach((element) => {
          element.train = 0;
          element.correct = 0;
          element.wrong = 0;
          element.percent = 0;
        })
    })

if (!localStorage.stat) {
    store.statistics = statistics;
} else store.statistics = JSON.parse(localStorage.getItem('stat'));







