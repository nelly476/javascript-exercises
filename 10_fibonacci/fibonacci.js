const fibonacci = function(num) {
    if (num > 0) {
        let fib = [1,1]
        for (let i = 0; i < num; i++ ) {
            fib.push(fib[i] + fib[i+1])
        }
        return fib[num - 1]
    }
    return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
