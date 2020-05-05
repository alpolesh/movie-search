

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper-container', {
    preloadImages: true,
    updateOnImagesReady: true,
    longSwipes: false,
    slidesPerView: 3,
    spaceBetween: 80,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  export default swiper;