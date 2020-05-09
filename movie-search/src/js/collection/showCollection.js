import updateSwiper from "../swiper/updateSwiper";
import store from "../store";

function showCollection() {
    document.querySelector('.collection').addEventListener('click', () => {
        document.querySelector('.error__text').textContent = '';
        store.isCollection = true;
        updateSwiper('clean');
        if (store.collection.length === 0) {
            document.querySelector('.error__text').textContent = 'Sorry. Your collection is empty.';
        }
    })
}

export default showCollection;
    