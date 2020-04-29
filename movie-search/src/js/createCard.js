

class Card {
    constructor({Title, imdbID, Poster, Year}) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide');
        this.cardElement = cardElement;

        const cardContent = `
        <a href="#" class="swiper-slide__title">${Title}</a>
        <div class="swiper-slide__image">
            <img src="${Poster}" alt="image">
        </div>
        <span class="swiper-slide__year">${Year}</span>
        <span class="swiper-slide__rating">${imdbID}</span>`;

        this.cardElement.innerHTML = cardContent;
    }
}

export default Card;