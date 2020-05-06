

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper-container', {
    preloadImages: true,
    updateOnImagesReady: true,
    longSwipes: false,
    // slidesPerView: 3,
    // spaceBetween: 80,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1075: {
            slidesPerView: 3,
            spaceBetween: 60
          }
      }
  });

  export default swiper;