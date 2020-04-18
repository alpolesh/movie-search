import updateBoard from "../board/updateBoard";
import store from "../store/store";
import updateMenu from "./updateMenu";

class MenuItem {
    constructor({categoryName}) {
        const menuElement = document.createElement('a');
        menuElement.setAttribute('href', '#');
        if (categoryName === 'Main Page') {
            menuElement.classList.add('navigation__link', 'navigation__link_active');
        } else menuElement.classList.add('navigation__link');
        menuElement.innerHTML = categoryName;
        this.menuElement = menuElement;
        this.menuElement.addEventListener('click', (event) => {
            store.isGameStarted = false;
            updateMenu(event.target);
            store.currentRoute = categoryName;
            updateBoard();
        })
    }
}

export default MenuItem;