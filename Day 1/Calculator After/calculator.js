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

  // Get Primary Operand
  get primaryOperand(){
    return parseFloat(this.primaryOperand.textContent);
  }

  // Set Primary Operand
  set primaryOperand(value){
    this.primaryOperand.textContent = value ?? "";
  }

  // Set Secondary Operand
  set secondaryOperand(value){
    this.secondaryOperand.textContent = value ?? "";
  }

  // Set Operations
  set operation(value){
    this.operation.textContent = value ?? "";
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

export default Calculator;
