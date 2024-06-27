// Lexical scope defines how variables names are resolved in nested functions
// Nested (child) functions have access to the scope of their parent functions.
// This is often confused with closure, but lexical scope is only an importtant part of closure
// A closure is a function having access to the parent scope even after the parent the parent function has closed

// global scope
let x = 1;
const parentFunction = () => {
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x+=5);
        console.log(myValue+=1)
    }
    return childFunction;
}
const result = parentFunction();
console.log(result);
result();
result();
result();
console.log(x) // Global variable
// console.log(myValue) private variable is only acccessed by child functions

// IIFE --(Immediately Invoked Function Expression)

// const privateCounter = (() => {
//     let count = 0;
//     console.log(`initial value: ${count}`);
//     return () => { count += 1; console.log(count)};
// })();

// privateCounter();
// privateCounter();
// privateCounter();
// privateCounter();

const credits = ((num) => {
    let credits = num
    console.log(`Initial credits: ${credits}`);
    return () => {
        credits -= 1;
        if (credits > 0) console.log(`Playing game, ${credits} credits remain!`);
        if (credits <= 0) return
    }
})(3);

credits();
credits();
credits();
credits();