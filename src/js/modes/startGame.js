import store from '../store/store';

function startGame() {
    document.querySelector('.start').addEventListener('click', () => {
        console.log(store.currentRoute);
        console.log(store.routes);
        
        const {content} = store.routes.find((item) => item.categoryName === store.currentRoute);
        const audiofiles = content.map((element) => {
            return element.audiofile;
        })
        
        function playWord(audioFile) {
            const audio = new Audio();
            audio.src = audioFile;
            audio.play();
        }

        playWord(audiofiles[0]);
        
        

        
        
    })
}

export default startGame;