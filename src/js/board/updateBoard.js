import store from '../store/store';

function updateBoard(){
    const container = document.querySelector('.card__container');
    container.innerHTML = '';
    const curr = store.currentRoute;
  
    const {content} = store.routes.find((item) => item.categoryName === curr);
  
    content.forEach((card)=>{
      container.append(card.cardElement);
    })
}

export default updateBoard;