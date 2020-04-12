function closeMenu() {
    document.querySelector('.navigation').classList.remove('navigation_active');
    document.querySelector('.burger__container').classList.remove('active');
    document.querySelector('.header__line').classList.remove('active');
  }

  module.exports = {
    closeMenu
  };