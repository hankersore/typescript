// 1. convert number to reversed array of digits

const digitize = (n: number): number[] => {
   const arr = n.toString().split('');
   const res = arr.reverse().map(digit => parseInt(digit))
   return res;
};

console.log(digitize(345));


// 2. Given an array of integers, return a new array with each value doubled.

function doubled(x: number[]): number[]{
    const res: number[] = [];
    for (let i=0; i < x.length; i++) {
        const n = x[i]*2;
        res.push(n);
    }
    return res;
}

console.log(doubled([1, 2, 3]));

// 3. The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in. 1705 --> 18

const centuryFromYear = (year: number): number => {
    const century: number = Math.ceil(year/100);
    return century;
};

console.log(centuryFromYear(19));
