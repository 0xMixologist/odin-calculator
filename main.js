const digit = document.querySelectorAll(".digit");
const operand = document.querySelectorAll(".operand");
const displayContent = document.querySelector("#content");
let calculation = [];
let initialValue = null;
let operator = null;
let operation = false;
let memory = null;

console.log(digit);

digit.forEach((digit) => {digit
    .addEventListener("click", () => {
        if (operation) {
          displayContent.textContent = "";
          displayContent.textContent += `${digit.id}`;
          operation = false;
        } else {
          displayContent.textContent += `${digit.id}`;
        }
        if (calculation.length > 0) {
          initialValue = calculation[0];
        };
    });
});
  
operand.forEach((operand) => {
  operand.addEventListener("click", () => {
    calculation.push(parseInt(displayContent.textContent));
    operation = true;
    operator = operand.textContent;
    if (memory !== null && operator !== memory) {
      initialValue = null;
      console.log(operate(memory, 1));
    }
      
    if (initialValue !== null) {
      console.log(operate(operator, 0));
    }
    return;
  });
});


function operate(operator, last) {
  switch(operator) {
    case "+":
      console.log(add(calculation, last));
      break;
    case "-":
      console.log(subtract(calculation, last));
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
  



function add(array, last) {
  //result = calculation.reduce((accumulator, current) => accumulator + current, 0);
  result = calculation[0] + calculation[1];
  calculation = [result];
  if (last) {
    memory = null;
    return result;
  };
  memory = "+";
  return result; 

}

function subtract(array, last) {
  result = calculation[0] - calculation[1];
  calculation = [result];
  if (last) {
    memory = null;
    return result;
  };
  memory = "-";
  return result;
}

function divide() {
}

function multiply() {
}

