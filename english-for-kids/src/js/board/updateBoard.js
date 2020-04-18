import store from '../store/store';
import updateStartButton from '../modes/updateStartButton';

function updateBoard(){
    const container = document.querySelector('.card__container');
    container.innerHTML = '';
    const curr = store.currentRoute;
  
    const {content} = store.routes.find((item) => item.categoryName === curr);
  
    content.forEach((card)=>{
      if (store.mode === 'play' && store.currentRoute !== 'Main Page') {
        container.append(card.cardElementPlay);
      } else container.append(card.cardElement);
    })

    // checkbox Play/Train
    if (store.mode === 'play' && store.currentRoute !== 'Main Page') {
      document.querySelector('.button_start').classList.add('button_start_active');
    } else document.querySelector('.button_start').classList.remove('button_start_active');
    if (store.mode === 'play' && store.currentRoute === 'Main Page') {
      document.querySelectorAll('.card').forEach((el) => el.classList.add('card-play'));
    } else if (store.mode === 'train' && store.currentRoute === 'Main Page') {
      document.querySelectorAll('.card').forEach((el) => el.classList.remove('card-play'));
    }

    updateStartButton();

    document.querySelectorAll('.card').forEach((item) => item.classList.remove('card-bordered-false', 'card-bordered-true'));
}

export default updateBoard;