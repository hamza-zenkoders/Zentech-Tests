
// Q:01
// Write a function that uses closures to create a private counter. 
// The counter should have methods to increment, decrement, and retrieve the current value, 
// but the value itself should not be directly accessible.

function privateCounter () {
    let counter = 0;

    function increment () {
        return ++counter;
    }

    function decrement () {
        return --counter;
    }

    function currentVal () {
        return counter;
    }

    return {
        increment,
        decrement,
        currentVal
    }
}

let counter = privateCounter();

console.log('Q:01');
console.log('Increment : ', counter.increment());
console.log('Curr Val : ', counter.currentVal());
console.log('Decrement : ', counter.decrement());



// Q:02
// Create a function that generates a list of functions, where each function returns its index in the list.
// (For example, if the list has three functions, calling the first function should return 0, the second 1, and so on.)

function generateFunctions (n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(() => {return i});
    }

    return arr;
}

const functions = generateFunctions(3);

console.log('\nQ:02');
for (let i = 0; i < functions.length; i++) {
    console.log(`function ${i} : ${functions[i]()}`);
}



// Q:03
// Write a function that creates a timer using closures. The timer should start at 0, 
// increment by 1 every second, and provide a method to pause and resume the timer.

function createTimer () {
    let count = 0;

    function startTimer () {
        console.log('\nTimer Started with count = ', count);
        return setInterval(() => {
            ++count;
            console.log(count)
            return count;
        }, 1000);
    }
    
    function pauseTimer (id) {
        console.log('\nTimer Paused with count = ', count);
        return clearInterval(id);
    }
    
    function resumeTimer () {
        console.log('\nTimer Resumed with count = ', count);
        return setInterval(() => {
            ++count;
            console.log(count)
            return count;
        }, 1000);
    }

    return {
        startTimer,
        pauseTimer,
        resumeTimer
    }
}

// Uncomment for testing Question:03
// const timer = createTimer();
// let timeOutId = timer.startTimer();

// setTimeout(() => {
//     timer.pauseTimer(timeOutId);

//     setTimeout(() => {
//         timeOutId = timer.resumeTimer();

//         setTimeout(() => {
//             timer.pauseTimer(timeOutId);
//         }, 5000);
//     }, 3000);
// }, 5000);



// Q:04
// Implement a function that partially applies arguments to another function using closures.
// (For example, const add5 = partial(add, 5); add5(3) should return 8.)

function partial (func, n) {
    return function (val) {
        return func (val, n);
    }
}

function add (first, second) {
    return first + second;
}

const add5 = partial(add, 5);

console.log('Q:04');
console.log(add5(3));