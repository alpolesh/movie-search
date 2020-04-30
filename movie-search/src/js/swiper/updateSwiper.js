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
}

export default updateSwiper;