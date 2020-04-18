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

createBoard()
navigationLink();
updateBoard();
playMode();
startGame();

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






