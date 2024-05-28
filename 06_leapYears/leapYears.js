const leapYears = function(num) {
    return (num%4 === 0 && num%100 !== 0) || (num%400 === 0)

};
// Do not edit below this line
module.exports = leapYears;


// const leapYears = function (year) {
//     return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
//   };