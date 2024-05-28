const removeFromArray = function(array, ...params) {
        // let a = array
    // while (params[0]) {
    //     a = a.filter(v => v !== params[0])
    //     params.shift()
    // }
    // return a

    return array.filter(v => !params.includes(v))
};

// Do not edit below this line
module.exports = removeFromArray;
