const digit = document.querySelectorAll(".digit");
const operand = document.querySelectorAll(".operand");
const clearButton = document.querySelectorAll(".clear-button");
const displayContent = document.querySelector("#content");

let calculation = [];
let initialValue = null;
let operator = null;
let operation = false;
let memory = null;

console.log(digit);
console.log(typeof(displayContent.textContent));
console.log(displayContent.textContent);

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
    console.log("clicked an operator")
    if (displayContent.textContent !== "") {
      calculation.push(parseInt(displayContent.textContent));
      console.log("before = got pressed" + calculation);
      operation = true;
      operator = operand.textContent;
      if (operator === "=") {
        console.log(operate(memory, 1));
        memory = null;
        operator = null;
        console.log(calculation);
        calculation = [];
        initialValue = null;
        return;
      }
      
      if (memory === null) {
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
    }
    else {
      console.log("please dont");
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

