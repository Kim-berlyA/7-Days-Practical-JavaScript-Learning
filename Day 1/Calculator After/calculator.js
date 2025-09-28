class Calculator {
  constructor(
    primaryOperandDisplay,
    secondaryOperandDisplay,
    operationDisplay
  ) {
    this.primaryOperandDisplay = primaryOperandDisplay;
    this.secondaryOperandDisplay = secondaryOperandDisplay;
    this.operationDisplay = operationDisplay;

    this.clear();
  }

  // Get Primary Operand
  get primaryOperand(){
    return parseFloat(this.primaryOperandDisplay.dataset.value);
  }

  // Set Primary Operand
  set primaryOperand(value){
    this.primaryOperandDisplay.dataset.value = value ?? "";
    this.primaryOperandDisplay.textContent = displayNumber(value);
  }

  // Set Secondary Operand
  set secondaryOperand(value){
    this.secondaryOperandDisplay.dataset.value = value ?? "";
    this.secondaryOperandDisplay.textContent = displayNumber(value);
  }

  // Set Operations
  set operation(value){
    this.operationDisplay.textContent = value ?? "";
  }

  // Adding a Digit Logic
  addDigit(digit){
    if(this.primaryOperand ===  0){
        this.primaryOperand = digit;
        return;
    }
    this.primaryOperand = this.primaryOperand.toString() + digit;
  }

  // Making a Clear Method
  clear() {
    this.primaryOperand = 0;
    this.secondaryOperand = null; // instead of string setting this to null
    this.operation = null; // same goes to this too
  }
}

// Variable to format numbers
const NUMBER_FORMATTER = new Intl.NumberFormat("en", {
    maximumFractionDigits : 20
});

// Creating a Function to add commas to the digits
function displayNumber(number){
    return NUMBER_FORMATTER.format(number);
}

export default Calculator;
