import store from '../store/store';
import updateBoard from '../board/update_board';

class Card {
    constructor({word, translation, image, audioSrc}, categoryName) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'text-white', 'bg-info');
        this.cardElement = cardElement;

        this.isFlipped = false;

        this.initialPosition =  
        `<img src="${image}" class="card-img-top rounded-circle" alt="${categoryName}">
        <div class="card-body">
          <p class="card-text">${categoryName || word}</p>
          ${categoryName ? '' : '<img src="./img/rotate.svg" class="rotate" alt="rotate"></img>'}
        </div>
        `

        this.flipped = 
        `<img src="${image}" class="card-img-top rounded-circle" alt="${categoryName}">
        <div class="card-body">
          <p class="card-text">${translation}</p>
        </div>`
        if (!categoryName) {
          this.makeFlip = () => {
            if (this.categoryName) return;
            if (this.isFlipped) {
              this.cardElement.innerHTML = this.flipped;
            } else {
              this.cardElement.innerHTML = this.initialPosition;
            }
            this.isFlipped = !this.isFlipped;
          }
        }
        this.cardElement.innerHTML = this.initialPosition;
        this.cardElement.addEventListener("click", (e) => {
          console.log(e.target.offsetParent);
          if (store.currentRoute === 'Main Page') {
            store.currentRoute = categoryName;
            updateBoard();
          } else if (store.mode === 'train') {
            const audio = new Audio();
            audio.src = audioSrc;
            audio.play();
          }
          if (e.target.classList.contains('rotate')) {
            e.target.offsetParent.classList.add('flip');
            this.isFlipped = true;
          }
        });
    }
}

export default Card;

