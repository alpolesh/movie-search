import store from '../store/store';
import getResult from '../templates/getResult';
import updateBoard from '../board/updateBoard';
import createStarContainer from '../stars/createStarContainer';
import updateStarContainer from '../stars/updateStarContainer';
import updateStartButton from './updateStartButton';
import countQuantity from '../statistics/countQuantity';

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
            createStarContainer();
            mistakesQuantity = 0;
            store.isGameStarted = true;
            const {content} = store.routes.find((item) => item.categoryName === store.currentRoute);
            audiofiles = content.map((element) => {
                return element.cardElementPlay.getAttribute('audioSrc');
            })
            audiofiles.sort(() =>{
                return Math.random() - 0.5;
            });
            updateStartButton('Repeat');
            playWord(audiofiles[audiofiles.length-1]);
        } else playWord(audiofiles[audiofiles.length-1]);
    })
        
    // playing sounds and checking answers
    document.querySelector('.card__container').addEventListener('click', (e) => {
        if (store.mode === 'play' && store.isGameStarted) {
            if (e.target.closest('.card') && !e.target.closest('.card').classList.contains('card-bordered-true')) {
                if (e.target.closest('.card').getAttribute('audioSrc') === currentSound[0]) {
                    countQuantity(e.target.closest('.card').getAttribute('word'), 'correct');
                    updateStarContainer('win');
                    e.target.closest('.card').classList.add('card-bordered-true');
                    document.querySelectorAll('.card').forEach((item) => item.classList.remove('card-bordered-false'));
                    playWord('audio/ok.mp3');
                    audiofiles.pop();
                    if (audiofiles.length) {
                        setTimeout(() => {playWord(audiofiles[audiofiles.length-1])}, 600);
                    } else {
                        if (!mistakesQuantity) {
                            playWord('audio/success.mp3');
                            getResult('win');
                        } else {
                            playWord('audio/failure.mp3');
                            getResult('lose', mistakesQuantity);
                        } 
                        store.currentRoute = 'Main Page';
                        store.isGameStarted = false;
                        setTimeout(updateBoard, 4000);
                    }
                } else {
                    updateStarContainer();
                    playWord('audio/error.mp3');
                    e.target.closest('.card').classList.add('card-bordered-false');
                    mistakesQuantity += 1;
                    countQuantity(e.target.closest('.card').getAttribute('word'), 'wrong');
                } 
            }
        }
    })
}

export default startGame;