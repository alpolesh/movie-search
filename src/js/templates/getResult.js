

function getResult(result, mistakes) {
    const resultWindow = document.createElement('div');
    resultWindow.classList.add('result');
    const victory = 
    `<div class="result__container">
    <img src="./img/success.png" class="" alt="victory">
     <p>Good job!</p>
     </div>`;
    const failure = 
    `<div class="result__container">
    <img src="./img/failure.png" class="" alt="failory">
    ${mistakes !== 1 ? `<p>${mistakes} mistakes</p>` : `<p>${mistakes} mistake</p>`}
     </div>`;

    if (result === 'win') {
        resultWindow.innerHTML = victory;
    } else resultWindow.innerHTML = failure;

    document.querySelector('.card__container').append(resultWindow);
}

export default getResult;