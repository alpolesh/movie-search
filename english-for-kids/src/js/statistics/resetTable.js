import updateBoard from "../board/updateBoard";
import createStat from "./createStat";

function resetTable() {
    document.querySelector('.reset').addEventListener('click', () => {
        localStorage.clear();
        createStat();
        updateBoard();
    })
}

export default resetTable;