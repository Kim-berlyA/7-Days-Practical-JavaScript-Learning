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
  get primaryOperand() {
    return parseFloat(this.primaryOperandDisplay.dataset.value);
  }

  // Set Primary Operand
  set primaryOperand(value) {
    this.primaryOperandDisplay.dataset.value = value ?? "";
    this.primaryOperandDisplay.textContent = displayNumber(value);
  }

  // Get Secondary Operand
  get secondaryOperand() {
    return parseFloat(this.secondaryOperandDisplay.dataset.value);
  }

  // Set Secondary Operand
  set secondaryOperand(value) {
    this.secondaryOperandDisplay.dataset.value = value ?? "";
    this.secondaryOperandDisplay.textContent = displayNumber(value);
  }

  // Get Operations
  get operation() {
    return this.operationDisplay.textContent;
  }

  // Set Operations
  set operation(value) {
    this.operationDisplay.textContent = value ?? "";
  }

  // Adding a Digit Logic
  addDigit(digit) {
    // Check if decimal point is repeted or not
    if (
      digit === "." &&
      this.primaryOperandDisplay.dataset.value.includes(".")
    ) {
      return;
    }

    if (this.primaryOperand === 0) {
      this.primaryOperand = digit;
      return;
    }

    this.primaryOperand = this.primaryOperandDisplay.dataset.value + digit;
  }

  // Remove a Digit Logic
  removeDigit() {
    const numberString = this.primaryOperandDisplay.dataset.value;
    if (numberString <= 1) {
      this.primaryOperand = 0;
      return;
    }
    this.primaryOperand = numberString.substring(0, numberString.length - 1);
  }

  // Add Operation to a digit logic
  chooseOperation(operation){
    if(this.operation !== "") return;
    this.operation = operation;
    this.secondaryOperand = this.primaryOperand;
    this.primaryOperand = 0;
  }

  // Making a Clear Method
  clear() {
    this.primaryOperand = 0;
    this.secondaryOperand = null; // instead of string setting this to null
    this.operation = null; // same goes to this too
  }
}

// Variable to format numbers
const NUMBER_FORMATTER = new Intl.NumberFormat("en");

// Creating a Function to add commas to the digits
function displayNumber(number) {
  const stringNumber = number?.toString() || "";
  // if our number is empty then we will return empty string instead of 0
  if (stringNumber === "") return "";

  // extract the decimal and digit part
  const [integer, decimal] = stringNumber.split(".");

  // Return the formatted digit
  const formattedInteger = NUMBER_FORMATTER.format(integer);

  // if decimal number is null then return formatted digit itself
  if (decimal == null) return formattedInteger;
  return formattedInteger + "." + decimal;
}

export default Calculator;
