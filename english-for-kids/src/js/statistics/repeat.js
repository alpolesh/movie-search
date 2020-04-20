import Card from "../cards/createCard";

function repeat() {
    document.querySelector('.repeat').addEventListener('click', () => {
        const container = document.querySelector('.card__container');
        let sortedByWrongs = JSON.parse(localStorage.getItem('stat'));
        if (!localStorage.stat) return;
        sortedByWrongs = sortedByWrongs.filter((item) => item.percent > 0)
        if (!sortedByWrongs.length) return;
        container.innerHTML = '';
        sortedByWrongs.sort((a,b) =>{
            if (a.percent < b.percent) {
                return 1;
            }
            if (a.percent > b.percent) {
                return -1;
            }
            return 0;
        });
        if (sortedByWrongs.length > 8) {
            sortedByWrongs = sortedByWrongs.slice(0, 8);    
        }

        sortedByWrongs.forEach((item)=>{
            const card = new Card(item);
            container.append(card.cardElement);
        })
    }) 
}

export default repeat;