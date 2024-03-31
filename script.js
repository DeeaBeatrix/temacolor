const listOfColors = ['#AD636C', '#009B72', '#6761A8', '#347E8D', '#798186'];
//                         0        1           2           3           4

const colorSwitcherButton = document.querySelector('.color-switcher-button');
const colorSwitcherContainer = document.querySelector('.color-switcher-container');
const currentColor = document.querySelector('.color-switcher-text-color');
const previousColor = document.querySelector('.color-switcher-button-previous');

let index = 0;

const switchColor = () => {
    index++;
    // console.log(listOfColors[index]);
    if (index === 5) {
        index = 0;
    }
    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
    currentColor.style.color = listOfColors[index];
    colorSwitcherContainer.style.transitionProperty="40,60"
};

colorSwitcherButton.addEventListener('click', switchColor);

// ---- Contorizator de culori -----

const contorizator = document.querySelector('.contorizator');
let numberOfReset = 0;
let numberPrevious = 0;

const resetCalc = () => {
    numberOfReset++;
    // if ( numberOfReset === 5) {
    //     numberOfReset++;
    // }
    contorizator.innerText = `Change in color: ${numberOfReset}`;
    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
};

colorSwitcherButton.addEventListener('click', resetCalc);

// ----- previous button -----

const switchPrevious = () => {
    resetCalc();
    switchColor();
    // switchColor();
    // if (numberPrevious = numberOfReset) {
    //    numberOfReset--;
    // }
    // contorizator.innerText = `Change in color: ${numberOfReset}`;
};  

previousColor.addEventListener('click', switchPrevious);

// ----- Butonul de reset inapoi la culoarea roz------

const resetToPink = document.querySelector('.button-reset');

const backToPink = () => {
    index = 0;
    numberOfReset = 0;
    contorizator.innerText = `Change in color: ${numberOfReset}`;
    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
    currentColor.style.color = listOfColors[index];
};

resetToPink.addEventListener('click', backToPink);

// ---- culoarea h2 a hex-ului sa aiba aceeasi culoare ca si background-ul  - DONE
// ---- sa se actualizeze mereu cand apas Click me (next) - DONE
// --- In loc de click me, sa avem previous si next = cu ele nav prin array culori - DONE

// ----- Tranzitie pe schimbarile de culori de background ------





