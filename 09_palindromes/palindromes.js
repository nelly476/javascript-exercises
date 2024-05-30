const palindromes = function (string) {
    let orig = []
    let newString = string.toLowerCase().replace(/[.,!\s]/g, "").split("")
    
    newString.forEach(i => orig.push(i))
    
    newString.reverse()
   
    return newString.join() === orig.join()
};
// Do not edit below this line
module.exports = palindromes;

