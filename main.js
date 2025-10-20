const digit = document.querySelectorAll(".digit");
const operand = document.querySelectorAll(".operand");
const displayContent = document.querySelector("#content");

console.log(digit);

digit.forEach((digit) => {digit
    .addEventListener("click", () => {
        displayContent.textContent += `${digit.id}`;
    });
});
  
operand.forEach((operand) => {
  operand.addEventListener("click", () => {
    operate(operand.textContent);
  });
});


function operate(operator) {
  
}

function add() {
}

function subtract() {
}

function divide() {
}

function multiply() {
}

