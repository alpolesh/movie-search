import Card from "../createCard";
import store from "../store";
import swiper from "./createSwiper";

function updateSwiper(clean) {
    if (clean) {
        swiper.removeAllSlides();
    }
    store.dataBase.forEach(element => {
        swiper.appendSlide(new Card(element).cardElement)
    })
    document.querySelector('.fa-circle-o-notch').style = "display: none;";
}

export default updateSwiper;