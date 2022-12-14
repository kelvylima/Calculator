//start from basic operations functions
function sum(a, b){
    return a+b
}

function subtraction(a, b) {
    return a - b
}

function multiply(a, b) {
    return a*b
}

function division(a, b){
    if (b === 0){
        return 'can\'t divide by 0'
    }
    return a/b
}

//calculator object

const calculator = {
    displayValue: 0,
    firstOperand: null,
    waitingSecondOperand: false,
    operator: null,
};

//update display
function updateDisplay(){
const display = document.getElementById('textdisplay')
display.value = calculator.displayValue}
updateDisplay()

//onclick button function

const keys = document.querySelector('#keys')
keys.addEventListener('click', (event) => {
    //acess the clicked element
    const { target } = event;
    //checking if the element is a button
    if (!target.matches('button')){
        return;
    }
    //putting elements on display
    if (target.classList.contains('operator-btn')){
        handleOperators(target.value);
        updateDisplay();
        return;
    }
    
    if (target.classList.contains('dot-btn')){
        if(!calculator.displayValue.includes(`${target.value}`)){
            calculator.displayValue += target.value;
        }
        updateDisplay()
        return;
    }
    if (target.classList.contains('all-clear-btn')){
        calculator.displayValue = 0
        calculator.firstOperand = null
        calculator.waitingSecondOperand = false
        calculator.operator = null
        updateDisplay()
        return;
    }
    if (target.classList.contains('delete-btn')){
        calculator.displayValue = calculator.displayValue.slice(0, -1)
        updateDisplay()
        return;
    } 
    inputDigit(target.value)
    updateDisplay()
})

//input on display
function inputDigit (digit){
    const {displayValue, waitingSecondOperand} = calculator;
    if(waitingSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingSecondOperand = false; 

    } else {calculator.displayValue = displayValue === 0 ? digit : displayValue + digit;
    };
    console.log(calculator);
}

//operators on display
function handleOperators(nextOperator) {
    //calculator objetcs propeties
    const { firstOperand, displayValue, operator} = calculator;
    //convert displayValue to float-point value
    const inputValue = parseFloat(displayValue);

    if(operator && calculate.waitingSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator)
        return;
    }


    //verify if 'fisrtOperand' is null and if 'inputValue' is a 'NaN'
    if (firstOperand === null && !isNaN(inputValue)){
        calculator.firstOperand = inputValue
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        calculator.displayValue = String(result)
        calculator.firstOperand = result
        console.log(result)
    }
    calculator.waitingSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator)

}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
        if(secondOperand === 0){
            return 'Can\'t divide by 0'
        } else{return firstOperand / secondOperand;}
    }
  
    return secondOperand;
  }


