import store from "../store/store";

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
    // for (let i = 0; i < store.statistics.length; i+=1) {
        for (let j = 0; j < store.statistics.length; j+=1) {
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            th.innerText = store.statistics[j].categoryName;
            tr.append(th);
            let td = document.createElement('td');
            td.innerText = store.statistics[j].word;
            tr.append(td);
            td = document.createElement('td');
            td.innerText = store.statistics[j].translation;
            tr.append(td);
            td = document.createElement('td');
            td.innerText = store.statistics[j].train; 
            tr.append(td);
            td = document.createElement('td');
            td.innerText = store.statistics[j].correct; 
            tr.append(td);
            td = document.createElement('td');
            td.innerText = store.statistics[j].wrong; 
            tr.append(td);
            td = document.createElement('td');
            td.innerText = store.statistics[j].percent; 
            tr.append(td);
            tbody.append(tr);
        }
    // }
    table.append(tbody);
    tableContainer.append(table);
 
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.innerHTML = `
    <button class="button-container__button reset">Reset</button>
    <button class="button-container__button repeat">Repeat difficult words</button>
    `;
    document.querySelector('.card__container').append(buttonContainer);
    document.querySelector('.card__container').append(tableContainer);
}

export default createTable;
