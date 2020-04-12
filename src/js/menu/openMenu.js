  function openMenu() {
    document.querySelector('.navigation').classList.toggle('navigation_active');
    document.querySelector('.burger__container').classList.toggle('active');
    document.querySelector('.header__line').classList.toggle('active');
  }

  module.exports = {
    openMenu
  };