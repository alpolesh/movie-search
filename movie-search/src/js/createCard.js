

class Card {
    constructor({Title, rating, Poster, Year, imdbID}) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide');
        this.cardElement = cardElement;
        let cardContent = '';
        if (Poster === 'N/A') {
            cardContent =
            `<div class="swiper-slide__title-container">
                <a href="https://www.imdb.com/title/${imdbID}/videogallery/" class="swiper-slide__title">${Title}</a>
            </div>
            <div class="swiper-slide__image">
                <img src="./img/zaglushka.jpg" alt="image">
            </div>
            <span class="swiper-slide__year">${Year}</span>
            <span class="swiper-slide__rating">${rating}</span>`;
        }   else {
            cardContent = `
            <div class="swiper-slide__title-container">
                <a href="https://www.imdb.com/title/${imdbID}/videogallery/" class="swiper-slide__title">${Title}</a>
            </div>
            <div class="swiper-slide__image">
                <img src="${Poster}" alt="image">
            </div>
            <span class="swiper-slide__year">${Year}</span>
            <span class="swiper-slide__rating">${rating}</span>`;
        }
        

        this.cardElement.innerHTML = cardContent;
    }
}

export default Card;
