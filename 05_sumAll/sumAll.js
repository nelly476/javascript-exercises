function sumAll(num1, num2) {
    if (!Number.isInteger(num1) )
    if (typeof num1 === "number" && typeof num2 === "number" && num1 > 0 && num2 > 0) {
        if (num1 < num2) {
            for (let i = num1 + 1; i <= num2; i++) {
                num1 += i
            }
            return num1
        } else {
            for (let i = num2 + 1; i <= num1; i++) {
                num2 += i
            }
            return num2
        }
    } else {
        return "ERROR"
    }



 };


// Do not edit below this line
module.exports = sumAll;

// const sumAll = function (min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";
//     if (min > max) {
//       const temp = min;
//       min = max;
//       max = temp;
//     }
  
//     // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
//     // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
//     // if (min > max) [min, max] = [max, min];
    
//     let sum = 0;
//     for (let i = min; i <= max; i++) {
//       sum += i;
//     }
//     return sum;
//   };
