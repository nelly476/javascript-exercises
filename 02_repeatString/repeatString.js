const repeatString = function(string, num) {
    if (num >= 0) {
        let z = []
        for (let i =0; i < num; i++) {
            z.push(string)
        }
        return z.join("")
    } else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = repeatString;
