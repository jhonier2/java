const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const historyBtn = document.querySelector('.history');
const historyList = document.querySelector('.history-list');
const historyArray = [];                                        

historyBtn.addEventListener('click', function() {
  if (historyList.style.display === 'none') {
    historyList.style.display = 'block';
  } else {
    historyList.style.display = 'none';
  }
})
 //PARTE DE EXPLICAR DE JHONIER----------------------------------------------------------------^

 const randomDice = () => {
    const random = Math.floor(Math.random() * 6) + 1; // Generar un número aleatorio entre 1 y 6
    rollDice(random);
    historyArray.push(random);
  }
  

const rollDice = random => {

    dice.style.animation = 'rolling 3s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice.style.animation = 'none';

    }, 4050);

}

const showHistory = () => {
    historyList.innerHTML = '';
    historyArray.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Tirada: ${item}`;
        historyList.appendChild(listItem);
    });
}

rollBtn.addEventListener('click', randomDice);
historyBtn.addEventListener('click', showHistory);

