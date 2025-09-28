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

  // Making a Clear Method
  clear() {
    this.primaryOperand.textContent = 0;
    this.secondaryOperand.textContent = "";
    this.operation = "";
  }
}

export default Calculator;
