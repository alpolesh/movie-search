import store from "../store/store";
import cards from "../cards/cards";

function createTable() {

    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');
    const table = document.createElement('table');
    table.classList.add('table');
    const thead = document.createElement('thead');
    thead.innerHTML = 
    `<tr>
    <th scope="col">Category</th>
    <th scope="col">Word</th>
    <th scope="col">Translation</th>
    <th scope="col">Train</th>
    <th scope="col">Correct</th>
    <th scope="col">Wrong</th>
    <th scope="col">%</th>
    </tr>`
    table.append(thead);
    const tbody = document.createElement('tbody');
    for (let i = 0; i < store.statistics.length; i++) {
        for (let j = 0; j < store.statistics[i].items.length; j++) {
            let tr = document.createElement('tr');
            let th = document.createElement('th');
            th.innerText = store.statistics[i].categoryName;
            tr.append(th);
            let td = document.createElement('td');
            td.innerText = store.statistics[i].items[j].word;
            tr.append(td);
            td = document.createElement('td');
            td.innerText = store.statistics[i].items[j].translation;
            tr.append(td);
            td = document.createElement('td');
            td.innerText = store.statistics[i].items[j].train; 
            tr.append(td);
            td = document.createElement('td');
            td.innerText = store.statistics[i].items[j].correct; 
            tr.append(td);
            td = document.createElement('td');
            td.innerText = store.statistics[i].items[j].wrong; 
            tr.append(td);
            td = document.createElement('td');
            td.innerText = store.statistics[i].items[j].percent; 
            tr.append(td);
            tbody.append(tr);
        }
    }
    table.append(tbody);
    tableContainer.append(table);
    const buttonReset = document.createElement('div');
    buttonReset.classList.add('button_reset');
    buttonReset.innerHTML = `<button class="reset">Reset</button>`;
    document.querySelector('.card__container').append(buttonReset);
    document.querySelector('.card__container').append(tableContainer);
}

export default createTable;
