import store from '../store/store';
import MenuItem from "./createMenu";

function navigationLink() {
    const nav = document.querySelector('.navigation');
    store.routes.forEach((item) => {
        nav.append(new MenuItem(item).menuElement);
    })
}

export default navigationLink;