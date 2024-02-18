"use strict";
// 1. convert number to reversed array of digits
const digitize = (n) => {
    const arr = n.toString().split('');
    const res = arr.reverse().map(digit => parseInt(digit));
    return res;
};
console.log(digitize(345));
// 2. Given an array of integers, return a new array with each value doubled.
function doubled(x) {
    const res = [];
    for (let i = 0; i < x.length; i++) {
        const n = x[i] * 2;
        res.push(n);
    }
    return res;
}
console.log(doubled([1, 2, 3]));
// 3. The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in. 1705 --> 18
const centuryFromYear = (year) => {
    const century = Math.ceil(year / 100);
    return century;
};
console.log(centuryFromYear(19));
// 4. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOdd(n) {
    if (n % 2) {
        return 'odd';
    }
    else {
        return 'even';
    }
}
console.log(evenOdd(5));
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};
function basicOp(operation, value1, value2) {
    const operationFunction = operations[operation];
    return operationFunction(value1, value2);
}
console.log(basicOp('/', 6, 3));
// 6. Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array  return an empty array.
function sum(input) {
    let positive = 0;
    let negative = 0;
    if (input.length === 0) {
        return [];
    }
    else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                positive++;
            }
            else {
                negative += input[i];
            }
        }
        return [positive, negative];
    }
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// 7. We need a function that can transform a string into a number.
function stringToNumber(str) {
    return +str;
}
// 8. Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
    return str.toUpperCase();
}
// 9. You are given two interior angles (in degrees) of a triangle.Write a function to return the 3rd.
const otherAngle = (a, b) => {
    return 180 - a - b;
};
// 10. Implement a function which convert the given boolean value into its string representation.
const booleanToString = (b) => {
    return `${b}`;
};
