import store from '../store/store';

function startGame() {
    const currentSound = [];
    let mistakesQuantity = 0;
    let audiofiles = [];

    function playWord(audioFile) {
        if (audioFile !== 'audio/error.mp3' && audioFile !== 'audio/ok.mp3') {
            currentSound.pop();
            currentSound.push(audioFile);
        }
        const audio = new Audio();
        audio.src = audioFile;
        audio.play();
        return currentSound;
    }

    document.querySelector('.start').addEventListener('click', () => {
        if (!store.isGameStarted) {
            store.isGameStarted = true;
            const {content} = store.routes.find((item) => item.categoryName === store.currentRoute);
            audiofiles = content.map((element) => {
                return element.cardElementPlay.getAttribute('audioSrc');
            })
            playWord(audiofiles[audiofiles.length-1]);
        } else playWord(audiofiles[audiofiles.length-1]);
    })
        
    // playing sounds and checking answers
    document.querySelector('.card__container').addEventListener('click', (e) => {
        if (store.mode === 'play' && store.isGameStarted) {
            if (e.target.closest('.card')) {
                if (e.target.closest('.card').getAttribute('audioSrc') === currentSound[0]) {
                    e.target.closest('.card').classList.add('card-bordered-true');
                    document.querySelectorAll('.card').forEach((item) => item.classList.remove('card-bordered-false'));
                    playWord('audio/ok.mp3');
                    audiofiles.pop();
                    setTimeout(() => {playWord(audiofiles[audiofiles.length-1])}, 600) ;
                } else {
                    playWord('audio/error.mp3');
                    e.target.closest('.card').classList.add('card-bordered-false');
                    mistakesQuantity += 1;
                } 
            }
        }
    })
}

export default startGame;