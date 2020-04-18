import store from '../store/store';

function updateMenu(eTarget) {
    document.querySelectorAll('.navigation__link').forEach(item => item.classList.remove('navigation__link_active'));
    eTarget.classList.add('navigation__link_active');
}

export default updateMenu;