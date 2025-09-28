// ...existing code...

# Calculator  Beginner-friendly Implementation Guide

This guide explains how to build the Day 1 Calculator in a simple, step‑by‑step way. It focuses on clarity so beginners can follow along and understand why each part exists.

## Goal (in one line)
Create a small, reliable calculator using plain JavaScript that separates the calculator logic from the UI (HTML/CSS).

## What you'll learn
- How to organize code into a class (Calculator).
- How to keep display formatting separate from calculations.
- Basic event handling to connect buttons to the logic.
- Common edge cases (multiple decimals, leading zeros, division by zero).

## Simple approach (high level)
1. Make a Calculator class that tracks numbers and the chosen operation.
2. Keep the UI code (event listeners) in a separate file (script.js).
3. Update the screen only from values the Calculator exposes (no mixing concerns).

## File structure
- /Day1-Calculator/
  - Calculator.js   // core logic (class)
  - script.js       // connects buttons to Calculator
  - index.html      // markup for display + buttons
  - styles.css      // visuals

## The Calculator class (plain explanation)
Think of the Calculator class like the brain. It holds:
- the current number you are typing (currentOperand),
- the previous number (previousOperand),
- the operation you picked (+, -, ×, ÷).

Calculator methods are small tasks the brain can do:
- clear(): reset everything to the starting state.
- delete(): remove the last digit you typed.
- appendDigit(d): add a digit (or '.') to the current number.
- chooseOperation(op): pick an operation and move numbers as needed.
- evaluate(): do the math and store the result as the current number.
- getDisplayValues(): return strings that the UI can show.

## Beginner-friendly method descriptions
- appendDigit('5')
  - If current is "0" and you type "5", it becomes "5".
  - If you already have a decimal point, typing '.' again does nothing.
  - Keep the current number as a string until evaluate() this avoids rounding issues.

- delete()
  - Remove the last character of the current number string.
  - If nothing remains, set current to "0" (so the display never becomes empty).

- chooseOperation('+')
  - If there's already a previous number and current number: evaluate first, then set the new operation.
  - Otherwise move current -> previous and clear current for the next input.

- evaluate()
  - Convert the stored strings to numbers and perform the operation.
  - If dividing by zero, set display to "Error" or a friendly message.
  - Store the result as the new current number so you can continue chaining operations.

## Display vs internal value (easy rules)
- Keep the internal value as a string while typing (e.g., "12.05").
- For display, format the integer part with commas (1,234) but keep the fractional part intact.
- Example formatting idea:
```js
const formatter = new Intl.NumberFormat('en', { maximumFractionDigits: 20 });
// Split "1234.567" -> int "1234" and dec "567", format int -> "1,234", join -> "1,234.567"
```

## Input rules (practical examples)
- Prevent "0003": if current is "0" and user types "0", keep it "0". If they type "3" replace "0" with "3".
- Only allow one '.' per number.
- Long numbers: let the user type them, but format for display; do not lose precision until evaluate().

## Example usage flow (what happens when you press buttons)
1. User types 1 2 3 -> appendDigit makes current "123".
2. User presses '+' -> chooseOperation moves "123" to previousOperand and sets operation '+'.
3. User types 4 5 -> current becomes "45".
4. User presses '=' -> evaluate computes 123 + 45 = 168, sets current to "168", clears previous and operation.

## Quick Start (how to implement step-by-step)
1. Create Calculator.js with a class skeleton and the method names listed above.
2. Add simple console.log tests:
   - new Calculator().appendDigit('5'); check currentOperand.
3. Implement evaluate() for +, -, *, / with basic checks (division by zero).
4. Create index.html with buttons that have data attributes (data-number, data-operation, etc.).
5. In script.js, add event listeners that call the Calculator methods and then update the DOM using getDisplayValues().

Example: connecting the "clear" button
```js
// script.js (very small example)
const calc = new Calculator();
document.querySelector('[data-all-clear]').addEventListener('click', () => {
  calc.clear();
  const { primary, secondary, operation } = calc.getDisplayValues();
  // update UI elements with these strings
});
```

## Edge cases to test manually
- Typing multiple decimals: "3.1.4" should not be allowed.
- Leading zeros: prevent "0001".
- Long decimals and large numbers: ensure display formatting works.
- Division by zero: show "Error" instead of NaN or Infinity.
- Repeated operations: pressing '+' repeatedly should not break logic.

## Next steps (what to add after basic working version)
- Unit tests for formatNumber and evaluate logic.
- Keyboard support (listen for keypresses).
- Accessibility: ARIA labels for buttons.
- Improve visuals in styles.css.

---