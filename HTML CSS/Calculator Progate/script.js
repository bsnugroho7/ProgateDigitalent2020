let prevNumber = '';
let currentNumber = 0;
let calculationOperator = '';
const calculatorScreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

const clearall = ()=>{
    prevNumber="";
    currentNumber="0";
    calculationOperator="";
}

const inputNumber = (number)=>{
    if (currentNumber=='0'){
        currentNumber=number;
    }
    else {
        currentNumber+=number;
    }
}

const updateScreen = (number) =>{
    calculatorScreen.value = number;
}

const inputOperator = (operators) =>{
    if (calculationOperator===''){
        prevNumber=currentNumber;
    }
    calculationOperator = operators;
    currentNumber="0";   
}

const calculate = ()=>{
    let result ="";
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break
        default: return
    }
    currentNumber = result;
    calculationOperator = "";
}

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber+=dot;
}

numbers.forEach ((number)=>{
    number.addEventListener("click", ()=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})
operators.forEach((operators)=>{
    operators.addEventListener("click",()=>{
        inputOperator(event.target.value);
    })
})
equalSign.addEventListener("click", ()=>{
    calculate();    
    updateScreen(currentNumber);
})

clearBtn.addEventListener("click",()=>{
    clearall();
    updateScreen(currentNumber);
})
decimal.addEventListener("click",()=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})