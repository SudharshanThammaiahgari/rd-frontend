/*
This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand

Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/


function zero(func) {
    if (func) return func(0);
    return 0;
}
function one(func) {
    if (func) return func(1);
    return 1;
}
function two(func) {
    if (func) return func(2);
    return 2;
}
function three(func) {
    if (func) return func(3);
    return 3;
}
function four(func) {
    if (func) return func(4);
    return 4;
}
function five(func) {
    if (func) return func(5);
    return 5;
}
function six(func) {
    if (func) return func(6);
    return 6;
}
function seven(func) {
    if (func) {
        return func(7);
    }
    return 7;
}
function eight(func) {
    if (func) return func(8);
    return 8;
}
function nine(func) {
    if (func) return func(9);
    return 9;
}

function plus(a) {
    return function (curr) {
        return a + curr;
    }
}
function minus(a) {
    return function (curr) {
        return curr - a;
    }
}

function times(a) {
    return function (curr) {
        return curr * a;
    }
}
function dividedBy(a) {
    return function (curr) {
        return Math.floor(curr / a);
    }
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

