const add = function(num1, num2) {
	return num1+ num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(args) {
  return args.reduce((total, curr) => total + curr, 0)
};

const multiply = function(args) {
  return args.reduce((total, curr) => total * curr)

};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
  let n = 1;
	for (let i = n; i <=num; i++ ) {
    n *= i
  }
  return n
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
