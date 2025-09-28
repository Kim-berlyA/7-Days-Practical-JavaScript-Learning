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

- Now when i carefully observed the inputs that are for Primary Operand Secondary Operand and Data Operation we come to know that basically it's the thing we have to target in our JS file.
    - Target primary operand, secondary operand, and operation as our display elements.
    - So to tell the Calculator what to display and what operations to perform what i will do is pass this information to my class.

    - Then inside of the calculator you can create a constructor and set their values.

    - Define the clear method
        - So understanding what actually happens when we press clear btn is all the values get clear basically empty and 0 is displayed we can acheive it through making the primary input 0 and remaining things empty strings.

    - Define the addDigit method
        - How would you do it?
        - we will add the textContent for primaryOperand as we will get the value
        - also we will add a check that if our primaryOperand is 0 then we will first overwrite the value and then append values to it.
        - We can make improvements to our code as our code right now is not a clean code and as per SOLID principles we are repeating so many things like the textContent so the solution for this will be to create getters and setters methods.