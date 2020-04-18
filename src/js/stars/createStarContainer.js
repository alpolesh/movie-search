

function createStarContainer() {
    const star = document.createElement('div');
    star.classList.add('star-container');
    document.querySelector('.card__container').prepend(star);
}

export default createStarContainer;