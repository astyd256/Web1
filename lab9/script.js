const numberButtons = document.querySelectorAll('[number]')
const operationButtons = document.querySelectorAll('[operation]')
const equalsButton = document.querySelector('[equals]')
const deleteButton = document.querySelector('[delete]')
const clearButton = document.getElementById('clear-btn')

const previousOperand = document.getElementById('previous-operand')
const currentOperand = document.getElementById('current-operand')

var is_no_operand = true;
var is_no_dot = true; 

numberButtons.forEach(button => {button.addEventListener('click',function () {
    if (currentOperand.textContent == "0")
        if (this.textContent == "."){
            currentOperand.textContent = "0.";
            is_no_dot = false;
        }
        else currentOperand.textContent = this.textContent;
    else if (this.textContent == "."){
        if (is_no_dot) {
            currentOperand.textContent += this.textContent;
            is_no_dot = false;
        }
    }    
    else currentOperand.textContent += this.textContent;
    })
});

operationButtons.forEach(button => {button.addEventListener('click',function () {
        if (is_no_operand) {
            previousOperand.textContent = currentOperand.textContent + this.textContent;
            currentOperand.textContent = "0";
            is_no_operand = false;
        }
        else {
            switch (previousOperand.textContent[previousOperand.textContent.length - 1]) {
                case "÷":previousOperand.textContent = parseFloat(previousOperand.textContent.slice(0, (previousOperand.textContent.length - 1)))
                /parseFloat(currentOperand.textContent) + this.textContent; break;
                case "*":previousOperand.textContent = parseFloat(previousOperand.textContent.slice(0, (previousOperand.textContent.length - 1)))
                *parseFloat(currentOperand.textContent) + this.textContent; break;
                case "-":previousOperand.textContent = parseFloat(previousOperand.textContent.slice(0, (previousOperand.textContent.length - 1)))
                -parseFloat(currentOperand.textContent) + this.textContent; break;
                case "+":previousOperand.textContent = parseFloat(previousOperand.textContent.slice(0, (previousOperand.textContent.length - 1)))
                +parseFloat(currentOperand.textContent) + this.textContent; break;
            }
            currentOperand.textContent = "0";
        }
        is_no_dot = true;
    })
});

equalsButton.onclick = function () {
    switch (previousOperand.textContent[previousOperand.textContent.length - 1]) {
        case "÷":currentOperand.textContent = parseFloat(previousOperand.textContent.slice(0, (previousOperand.textContent.length - 1)))
        /parseFloat(currentOperand.textContent); break;
        case "*":currentOperand.textContent = parseFloat(previousOperand.textContent.slice(0, (previousOperand.textContent.length - 1)))
        *parseFloat(currentOperand.textContent); break;
        case "-":currentOperand.textContent = parseFloat(previousOperand.textContent.slice(0, (previousOperand.textContent.length - 1)))
        -parseFloat(currentOperand.textContent); break;
        case "+":currentOperand.textContent = parseFloat(previousOperand.textContent.slice(0, (previousOperand.textContent.length - 1)))
        +parseFloat(currentOperand.textContent); break;
    }
        previousOperand.textContent = "";
        is_no_operand = true;
        is_no_dot = true; 
}

deleteButton.onclick = function () {
    if (currentOperand.textContent[currentOperand.textContent.length - 1] == ".") is_no_dot = true; 
    if (currentOperand.textContent.length <= 1) currentOperand.textContent = "0";
    else currentOperand.textContent = currentOperand.textContent.slice(0, (currentOperand.textContent.length - 1));
}

clearButton.onclick = function() {
    currentOperand.textContent = "0";
    previousOperand.textContent = ""; 
    is_no_operand = true;     
    is_no_dot = true;
}
