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
  switch(operator) {
    case "+":
      add();
      break;
    case "-":
      subtract();
      break;
    case "/":
      divide();
      break;
    case "*":
      multiply();
      break;
    default:
      console.log("Invalid Operator");
  };
}
  

}

function add() {
}

function subtract() {
}

function divide() {
}

function multiply() {
}

