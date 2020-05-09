import store from "./store";
import swiper from "./swiper/createSwiper";


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
            <span class="swiper-slide__rating">${rating}</span>
            <div class="join">
                <button type="submit" class="join__button">Add to collection</button>
            </div>`;
            
        }   else {
            cardContent = `
            <div class="swiper-slide__title-container">
                <a href="https://www.imdb.com/title/${imdbID}/videogallery/" class="swiper-slide__title">${Title}</a>
            </div>
            <div class="swiper-slide__image">
                <img src="${Poster}" alt="image">
            </div>
            <span class="swiper-slide__year">${Year}</span>
            <span class="swiper-slide__rating">${rating}</span>
            <div class="join">
                <button type="submit" class="join__button">Add to collection</button>
            </div>`;
        }
        
        this.cardElement.innerHTML = cardContent;
        this.cardElement.addEventListener('click', (e) => {
            if (!store.isCollection && (e.target.classList.contains('join') || e.target.classList.contains('join__button'))) {
                store.collection.push(this.cardElement);
            } else if (store.isCollection && (e.target.classList.contains('remove') || e.target.classList.contains('join__button'))) {
                e.target.closest('.swiper-slide').remove();
                swiper.update();
                const i = store.collection.indexOf(this.cardElement);
                store.collection.splice(i, 1)
            }
        })
        
    }
}

export default Card;
