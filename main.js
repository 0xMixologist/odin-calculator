const digit = document.querySelectorAll(".digit");
const operand = document.querySelectorAll(".operand");
const clearButton = document.querySelectorAll(".clear-button");
const displayContent = document.querySelector("#content");

let calculation = [];
let operator = null;
let operation = true;
let memory = null;

console.log(digit);
console.log(typeof(displayContent.textContent));
console.log(displayContent.textContent);

//This adds the numbers to the display 

digit.forEach((digit) => {digit
    .addEventListener("click", () => {
        if (!operation) {
          displayContent.textContent = "";
          displayContent.textContent += `${digit.id}`;
          operation = true;
        } else {
          displayContent.textContent += `${digit.id}`;
        }
    });
});
  
operand.forEach((operand) => {
  operand.addEventListener("click", () => {
    console.log("clicked an operator")
    if (displayContent.textContent !== "") {
      operator = operand.textContent;   //saves the operator 
      if (operation) {
        calculation.push(parseFloat(displayContent.textContent));
      } else {
        memory = operator;
      }


      if (operator === "=") {           //if the user presses equal, it will finish the calculation and return to the initial state
        console.log(operate(memory, 1));
        memory = null;
        operator = null;
        console.log(calculation);
        calculation = [parseFloat(displayContent.textContent)];
        operation = false;
        return;
      }
      
      if (memory === null) {       //this happens in the initial state
        memory = operator;
      }
      console.log(operator);
      console.log(memory);
      if (memory !== null && operator !== memory && calculation.length > 1 && operation) {
        console.log(operate(memory, 1));
        memory = operator;   //calculates the pending operation when swithicng operator
      }
        
      if (calculation.length > 1 && operation) {
        console.log(operate(operator, 0));
      }
      operation = false;
      return;
    }
    else {
      return;
    }
    return;
  });
});

clearButton.forEach((button) => {
  button.addEventListener("click", () => {
    switch(button.id) {
      case "ac":
        memory = null;
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
      displayContent.textContent = Math.round(add(calculation, last) * 1000000) / 1000000;
      break;
    case "-":
      displayContent.textContent = Math.round(subtract(calculation, last) * 1000000) / 1000000;
      break;
    case "/":
      displayContent.textContent = Math.round(divide(calculation, last) * 1000000) / 1000000;
      break;
    case "*":
      displayContent.textContent = Math.round(multiply(calculation, last) * 1000000) / 1000000;
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
  return result; 

}

function subtract(array, last) {
  result = calculation[0] - calculation[1];
  calculation = [result];
  if (last) {
    return result;
  };
  memory = "-";
  return result;
}

function divide(array, last) {
  result = calculation[0] / calculation[1];
  calculation = [result];
  if (last) {
    return result;
  };
  memory = "/";
  return result;
}

function multiply(array, last) {
  result = calculation[0] * calculation[1];
  calculation = [result];
  if (last) {
    return result;
  };
  memory = "*";
  return result;
}

