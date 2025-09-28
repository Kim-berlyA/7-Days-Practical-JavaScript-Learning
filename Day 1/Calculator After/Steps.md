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

        - Creating a Simple Function to Display all the values with commas
        ```js
        const NUMBER_FORMATTER = new Intl.NumberFormat("en", {
            maximumFractionDigits : 20
        });

        function displayNumber(number){
            return NUMBER_FORMATTER.format(number)
        }
        ```
        
        - So the problem that we are facing here is that when we set the commas to the number what actually happens is that js behind the scene doesn't understand how commas work with number so it's not making it work as we want it to work so for that what we will do is in our setter function what we will do is use 1 property to display numbers and 1 property to perform calculations behind the scenes.

        - So now what happens here is that we cannot add that decimal pointer to our digits in our calc
        - It's because Js cannot recognize how does the decimal get's added to the number so what we will be doing is

        - So what we can do is handle the seperately take our number before the decimal and then take out number after the dicimal point 
            - in out displayNumber function we can check
            - convert our number to string and then if that number is empty string or not?
            - if it's empty then we will return  empty string
            - if it's not empty we will split our stringNumber to the decimal character and then we can get the integer part and the fraction part seperated.
            - now if we don't have any decimal part we will just format the integer and return it.
            - also we will add a check when we are adding the decimal part to our digit is that if it has occured once we cannot add it second time if user tries to do so we will just return it!

    - Define the removeDigit method
        - Have you ever solved dsa question substring from strings?
        - The same functionality is what i am going to use it right here in this feature.

        - Simply creating a variable and then checking if it has length equals to 1 below 1 we will make it 0
        - Also we will remove the element by using subString method and taking out the inputs from 0 to length-1

    - Define the Operation method
        - So we didn't create getter and setter methods for operations so let us do that first.
        - Then what we will do is define a method for operations
        - take the current operation from get operation
        - use it to display the value on screen 
        - then check if we have already used it then we won't be using it again because it will break the functionality
        