- My Approach I will be following Object Oriented Programming for this!

- Steps to Perform
1. Click a number 
2. Click clear button
3. Click delete button
4. Click an operation
5. Click the (.) button
6. Click equals

- Here i will be creating a separate file for performing calucations logics.
- Calculator.js

- What will be our process/ approach

- Create a class Calculator 
- Import that in script.js

- Setup those event listeners on the actions and then start creating each and every feature.
    - So how do you do it?
    - First import the class and then use it's methods to perform each and every action.
    ```js
    const calculator = new Calculator();

    document.addEventListener("click", (e)=>{
        if(e.target.matches('[data-all-clear]')){
            calculator.clear();
        }
    })
    ```
    - Same way we can create when number is clicked. addDigit
    - e.target.textContent
    - Same way do for delete key so instead of addDigit we can do removeDigit!
    - Same way we will target out operations as chooseOperation
    - Same way we can perform it for evaluation