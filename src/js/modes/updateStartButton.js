
function updateStartButton(mode) {
    if (mode) {
        document.querySelector('.start').innerText = 'Repeat'; 
    } else document.querySelector('.start').innerText = 'Start Game'; 
}

export default updateStartButton;