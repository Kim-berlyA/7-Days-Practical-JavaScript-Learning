class Calculator {
  constructor(
    primaryOperandDisplay,
    secondaryOperandDisplay,
    operationDisplay
  ) {
    this.primaryOperand = primaryOperandDisplay;
    this.secondaryOperand = secondaryOperandDisplay;
    this.operation = operationDisplay;

    this.clear();
  }

  // Adding a Digit Logic
  addDigit(digit){
    if(this.primaryOperand.textContent === "0"){
        return this.primaryOperand.textContent = digit;
    }
    this.primaryOperand.textContent += digit;
  }

  // Making a Clear Method
  clear() {
    this.primaryOperand.textContent = 0;
    this.secondaryOperand.textContent = "";
    this.operation = "";
  }
}

export default Calculator;
