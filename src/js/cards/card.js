class Card {
    constructor(text, image) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'text-white', 'bg-info');
        cardElement.innerHTML = 
        `<img src="${image}" class="card-img-top rounded-circle" alt="Action(set A)">
        <div class="card-body">
          <p class="card-text">${text}</p>
          <img src="./img/rotate.svg" class="rotate" alt="rotate"></img>
        </div>`
        return cardElement;
    }

    // eslint-disable-next-line class-methods-use-this
    // createCard() {
    //     const cardElement = document.createElement('div');
    //     cardElement.classList.add('card');
    //     cardElement.classList.add('text-white');
    //     cardElement.classList.add('bg-info');
    //     cardElement.innerHTML = 
    //     `<img src="${image}" class="card-img-top rounded-circle" alt="Action(set A)">
    //     <div class="card-body">
    //       <p class="card-text">${text}</p>
    //     </div>`
    //     return cardElement;
    // }
}

export default Card;

