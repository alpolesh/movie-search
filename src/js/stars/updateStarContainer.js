

function updateStarContainer(result) {
    if (result) {
        document.querySelector('.star-container').innerHTML += `<img src="./img/star-win.svg" class="star-win">`
    } else document.querySelector('.star-container').innerHTML += `<img src="./img/star.svg" class="star-lose">`
}

export default updateStarContainer;