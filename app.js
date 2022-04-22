/* eslint-disable no-console */
// These functions are tested by console logging - all the console log statements
// should print true.

// 1. convertToSeconds
// Write a function called convertToSeconds that takes
// a number of minutes as an argument and returns
// the number of seconds

function convertToSeconds(minutes) {
    return minutes * 60;
    // that alone should work, no?  Or the below instead.  Either seems valid.
    // let convertedSeconds = convertToSeconds * 60;
    // return convertedSeconds;
}

console.log(`convertToSeconds(10) === 600 : ${convertToSeconds(10) === 600}`);

// 2. areaOfTriangle
// Write a function called areaOfTriangle that takes in the base and height
// of a triangle and returns its area
function areaOfTriangle(height, base) {
    return height * base / 2;
}
console.log(`areaOfTriangle(5, 10) === 25 : ${areaOfTriangle(5, 10) === 25}`);

// 3. lessThan100
// Given 2 numbers, return true if their sum is less than 100
// return false if it is greater than 100
function lessThan100(addend1, addend2) {
    return (addend1 + addend2) < 100;
}
console.log(`lessThan100(5, 10) === true : ${lessThan100(5, 10) === true}`);
console.log(`lessThan100(100, 10) === false : ${lessThan100(100, 10) === false}`);

// 4. getFormattedName
// Write a function called getFormattedName
// that accepts a first_name and last_name as required parameters
// and a third parameter called middle_name which is optional.
// The function should return a string with the first, middle and last names
function getFormattedName(first_name, last_name, middle_name) {
    if (middle_name === undefined) {
        let full_name = (first_name + ' ' + last_name);
        return full_name;
    } else {
        let full_name = (first_name + ' ' + middle_name + ' ' + last_name);
        return full_name;
    }
    // if (middle_name == undefined) {
    //     return first_name.concat(' ', last_name);
    // } else {
    //     return first_name.concat(' ', middle_name, ' ', last_name);
    // }
}
console.log(
    `getFormattedName('Ruth', 'Ginsburg') === 'Ruth Ginsburg': ${
        getFormattedName('Ruth', 'Ginsburg') === 'Ruth Ginsburg'
    }`
);
console.log(
    `getFormattedName('Ruth', 'Ginsburg', 'Bader') === 'Ruth Bader Ginsburg': ${
        getFormattedName('Ruth', 'Ginsburg', 'Bader') === 'Ruth Bader Ginsburg'
    }`
);

// 5. daysInMonth
// Write a function called daysInMonth that accepts a month as input
// (represented as a number between 1 and 12) and returns the number
// of days in that month. For now, assume there are always 29 days in Feb.
// Bonus 1: Check the value of the number passed into the function and
//    print a message to the user if the value is not between 1 and 12
// Bonus 2: Update the function to accept an optional parameter year
//    that checks if the year is a leap year, and returns the correct
//    number of days for Feb. The default value for the year should be
//    the current year
function daysInMonth(month) {
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else if (month === 2) {
        return 29;
    } else {
        return 31;
    }
}
// function daysInMonth(month) {
//     const short_months = [4, 6, 9, 11];
//     if (short_months.includes(month)) {
//         return 30;
//     } else if (month === 2) {
//         return 29;
//     } else {
//         return 31;
//     }
// }
console.log(`daysInMonth(2) === 29: ${daysInMonth(2) === 29}`);
console.log(`daysInMonth(3) === 31: ${daysInMonth(3) === 31}`);
console.log(`daysInMonth(11) === 30: ${daysInMonth(11) === 30}`);

// Additional Practice
// - [Multiply](https://www.codewars.com/kata/50654ddff44f800200000004)

function multiply(a, b){
    return a * b;
}

multiply(2, 3);

// - [Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)

function even_or_odd(number) {
    if (Number.isInteger(number / 2)) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

even_or_odd(2);

// - [Student Grades](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)

function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else {
        return 0;
    }
}

// but with arrays
// function finalGrade (exam, projects) {
//     const conditions100 = [
//         90,
//         10,
//     ]
//     const conditions90 = [
//         75,
//         5,
//     ]
//     const conditions75 = [
//         50,
//         2,
//     ]
//     if (exam > conditions100.at(0) || projects > conditions100.at(1)) {
//         return 100;
//     } else if (exam > conditions90.at(0) && projects >= conditions90.at(1)) {
//         return 90;
//     } else if (exam > conditions75.at(0) && projects >= conditions75.at(1)) {
//         return 75;
//     } else {
//         return 0;
//     }
// }

// with arrays, but better?
// function finalGrade (exam, projects) {
//     const examBreakpoints = [
//         90,
//         75,
//         50,
//     ]
//     const projectsBreakpoints = [
//         10,
//         5,
//         2,
//     ]
//     if (exam > examBreakpoints.at(0) || projects > projectsBreakpoints.at(0)) {
//         return 100;
//     } else if (exam > examBreakpoints.at(1) && projects >= projectsBreakpoints.at(1)) {
//         return 90;
//     } else if (exam > examBreakpoints.at(2) && projects >= projectsBreakpoints.at(2)) {
//         return 75;
//     } else {
//         return 0;
//     }
// }

console.log(`finalGrade(91, 0) === 100: ${finalGrade(91, 0) === 100}`);
console.log(`finalGrade(22, 11) === 100: ${finalGrade(22, 11) === 100}`);
console.log(`finalGrade(90, 10) === 90: ${finalGrade(90, 10) === 90}`);
console.log(`finalGrade(90, 4) === 75: ${finalGrade(90, 4) === 75}`);
console.log(`finalGrade(74, 1) === 0: ${finalGrade(74, 1) === 0}`);

// - [Reversed Strings](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

function solution(str) {
    let revStr = '';
    for (var char = (str.length - 1); char >= 0; char--) {
        revStr = revStr.concat(str.charAt(char));
    }
    return revStr;
}

console.log(`solution('world') === 'dlrow': ${solution('world') === 'dlrow'}`);
console.log(`solution('hello') === 'olleh': ${solution('hello') === 'olleh'}`);
console.log(`solution('') === '': ${solution('') === ''}`);
console.log(`solution('x') === 'x': ${solution('x') === 'x'}`);


// Ask if "everyone" would use i where I used char, maybe also ask if any other
// students got '43210' for 'world' the first time (using the index instead of
// the value assigned to it).

// - [Is it a Palindrome?](https://www.codewars.com/kata/57a1fd2ce298a731b20006a4)

// function isPalindrome(x) {
//     let y = '';
//     for (var i = (x.length - 1); i >= 0; i--) {
//         y = y.concat(x.charAt(i));
//     }
//     return (y.toLowerCase() === x.toLowerCase());
// }

// - [Numerical Palindrome](https://www.codewars.com/kata/58ba6fece3614ba7c200017f)

// function palindrome(num) {
//     // if (!Number.isInteger(num) || Number.isInteger(num) < 0) {
//     // why is it slightly more broken if the first line is as above?
//     if (!Number.isInteger(num)) {
//         return 'Not valid';
//     } else if (Number.isInteger(num) < 0) {
//         return 'Not valid';
//     } else {
//         let stringifiedNum = num.toString();
//         let revNum = '';
//         for (var i = (stringifiedNum.length - 1); i >= 0; i--) {
//             revNum = revNum.concat(stringifiedNum.charAt(i));
//         }
//         var numToCompare = parseInt(revNum, 10);
//         return (numToCompare === Number.isInteger(num));
//     }
// }

// - [Disemvowel Trolls](https://www.codewars.com/kata/52fba66badcd10859f00097e)
