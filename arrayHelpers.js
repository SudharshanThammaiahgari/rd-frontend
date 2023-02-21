/* 1. Array Helpers

 * This kata is designed to test your ability to extend the functionality of
 *  built-in classes. In this case, we want you to extend the built-in Array 
 * class with the following methods: square(), cube(), average(), sum(), even() 
 * and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers

Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]

 */

// TODO
if (!Array.prototype.square) {
    Array.prototype.square = function () {
        let arr = [];
        console.log(this);
        for (let item of this) {
            arr.push(Math.pow(item, 2));
        }
        return arr;
    }
}

if (!Array.prototype.cube) {
    Array.prototype.cube = function () {
        let arr = [];
        for (let item of this) {
            arr.push(Math.pow(item, 3));
        }
        return arr;
    }
}

if (!Array.prototype.average) {
    if (this.length == 0) {
        return NaN;
    }
    Array.prototype.average = function () {
        let sum = 0;
        for (let item of this) {
            sum += item;
        }
        return sum / this.length;
    }
}

if (!Array.prototype.sum) {
    Array.prototype.sum = function () {
        let sum1 = 0;
        for (let item of this) {
            sum1 += item;
        }
        return sum1;
    }
}

if (!Array.prototype.even) {
    Array.prototype.even = function () {
        let arr = [];
        for (let item of this) {
            if (item % 2 == 0) {
                arr.push(item);
            }
        }
        return arr;
    }
}


if (!Array.prototype.odd) {
    Array.prototype.odd = function () {
        let arr = [];
        for (let item of this) {
            if (item % 2 != 0) {
                arr.push(item);
            }
        }
        return arr;
    }
}