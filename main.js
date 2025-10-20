const digit = document.querySelectorAll(".digit");
const operand = document.querySelectorAll(".operand");
const clearButton = document.querySelectorAll(".clear-button");
const displayContent = document.querySelector("#content");

let calculation = [];
let initialValue = null;
let operator = null;
let operation = false;
let memory = null;
let trigger = false;

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
    if (memory === null && !trigger) {
      memory = operator;
    }

    if (memory !== null && operator !== memory) {
      initialValue = null;
      console.log(operate(memory, 1));
      memory = operator;//calculates the pending operation when swithicng operator
    }
      
    if (initialValue !== null) {
      console.log(operate(operator, 0));
    }
    return;
  });
});

clearButton.forEach((button) => {
  button.addEventListener("click", () => {
    switch(button.id) {
      case "ac":
        memory = null;
        initialValue = null;
        operator = null;
        operation = false;
        calculation = [];
        displayContent.textContent = "";
        break;
      case "ce":
        displayContent.textContent = "";
        break;
    };
  });
});
    


function operate(operator, last) {
  switch(operator) {
    case "+":
      displayContent.textContent = `${add(calculation, last)}`;
      break;
    case "-":
      displayContent.textContent = `${subtract(calculation, last)}`;
      break;
    case "/":
      displayContent.textContent = `${divide(calculation, last)}`;
      break;
    case "*":
      displayContent.textContent = `${multiply(calculation, last)}`;
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
  trigger = true;
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

function divide(array, last) {
  result = calculation[0] / calculation[1];
  calculation = [result];
  if (last) {
    memory = null;
    return result;
  };
  memory = "/";
  return result;
}

function multiply(array, last) {
  result = calculation[0] * calculation[1];
  calculation = [result];
  if (last) {
    memory = null;
    return result;
  };
  memory = "*";
  return result;
}

