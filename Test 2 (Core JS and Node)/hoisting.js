
// Q:01
// Explain the difference in hoisting behavior between var, let, and const with an example. 
// How would you demonstrate these differences in a real-world use case?

// var 
// 1. It is hoisted with default initialization of 'undefined', so it can be accessed before declaration without any errors
// 2. var declarations are global or function scoped
// 3. var variables can be updated and re-declared

console.log(numberVar)     // undefined
var numberVar = 10;

// let 
// 1. Accessing variable before initialization will throw reference error
// 2. let declarations are block scoped
// 3. let variables can be updated but not re-declared

console.log(numberLet)     // error
let numberLet = 1;


// const 
// 1. const must be initialized during declaration else it will throw error
// 2. const declarations are block scoped
// 3. const variables cannot be updated or not re-declared

console.log(numberConst)     // error
const numberConst = 10;



// Q:02
// What will the following code output, and why?

console.log(a);     // output : undefined
var a = 10;
let b = 20;
console.log(b);     // output : 20

// The first console output's 'undefined' because 'a' is declared using 'var' 
// and 'var' variables if accessed before declaration provides 'undefined'.

// The second console output's '20' because 'b' is declared using 'let'
// and it is initialized before-hand


// Modify the code so that it doesn’t throw an error or print undefined.

var aNew = 10;
console.log(aNew);     // output : 10
let bNew = 20;
console.log(bNew);     // output : 20



// Q:03
// Write a function that demonstrates hoisting by declaring both a function 
// and a variable with the same name. Explain the output when the function is called.

// Example : 01
function demonstrateHoisting () {
    var sameName;
    
    function sameName () {
        return 'function';
    }
    
    return sameName;
}

console.log(demonstrateHoisting())      // output : function

// Example : 02
function demonstrateHoisting () {
    var sameName = 'variable';
    
    function sameName () {
        return 'function';
    }
    
    return sameName;
}

console.log(demonstrateHoisting())      // output : variable


// In Example#01, since the variable is not initialized, its value is set as 'undefined'.
// Since both variable and function are hoisted, JS gives priority to function

// In Example#02, however the variable is initialized, therefore its value is not 'undefined'.
// So JS gives priority to variables as it is not undefined



// Q:04
// What is the scope of variables declared with var, let, and const when used inside loops? 
// Provide an example that uses hoisting to illustrate your explanation.


// var
// Variables declared with var are function-scoped or globally scoped. 
// If declared inside a loop or block, the variable is still accessible outside the block 

// Example
console.log("Before the loop");

for (var i = 0; i < 3; i++) {
    console.log("Inside loop with var, i =", i);
}

console.log("After the loop, var i =", i);


// let
// let is hoisted, but it is not initialized until the loop is reached. 
// If you try to access j before its declaration, it will throw a ReferenceError 
// The variable j is block-scoped, so it won't be accessible outside the loop.

// Example
for (let j = 0; j < 3; j++) {
    console.log("Inside loop with let, j =", j);
}

console.log("After the loop, let j =", j); // ReferenceError


// const
//  Similar to let, const is hoisted but cannot be accessed before the declaration. 
// Also, const variables cannot be reassigned. In this case, the loop attempts to reassign k, 
// which causes a TypeError.

// Example
for (const k = 0; k < 3; k++) {
    console.log("Inside loop with const, k =", k); // TypeError: Assignment to constant variable.
}

console.log("After the loop, const k =", k); // ReferenceError



// Q:05
// How does function expression hoisting differ from function declaration hoisting? 
// Write code to demonstrate the difference.

// function expression hoisting
// Example
greet();  // This works because the function is hoisted.

function greet() {
  console.log("Hello!");
}


// function declaration hoisting
// Example
greet();  // This throws an error because greet is undefined.

var greet = function() {
  console.log("Hello!");
};