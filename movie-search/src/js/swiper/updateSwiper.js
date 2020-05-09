import Card from "../createCard";
import store from "../store";
import swiper from "./createSwiper";

function updateSwiper(clean) {
    if (clean) {
        swiper.removeAllSlides();
    }
    if (store.isCollection) {
        store.collection.forEach(element => {
            swiper.appendSlide(element);
        })
        document.querySelectorAll('.join__button').forEach(el => {
            el.parentElement.classList.remove('join');
            el.parentElement.classList.add('remove');
            el.textContent = 'Remove'});
        document.querySelectorAll('.collection').forEach(el => {
            el.style = "display: none;"});
    } else {
        store.dataBase.forEach(element => {
            swiper.appendSlide(new Card(element).cardElement)
        })
        document.querySelectorAll('.join__button').forEach(el => {
            el.parentElement.classList.remove('remove');
            el.parentElement.classList.add('join');
            el.textContent = 'Add to collection'});
        document.querySelectorAll('.collection').forEach(el => {
            el.style = "display: flex;"});
    }
    document.querySelector('.fa-circle-o-notch').style = "display: none;";
    return swiper.slides.length;
}

export default updateSwiper;