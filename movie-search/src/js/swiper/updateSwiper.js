import Card from "../createCard";
import store from "../store";

function updateSwiper() {
    document.querySelector('.swiper-wrapper').innerHTML = '';
    store.dataBase.forEach(element => {
        console.log(element);
        document.querySelector('.swiper-wrapper').append(new Card(element).cardElement)
    })
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}

export default updateSwiper;