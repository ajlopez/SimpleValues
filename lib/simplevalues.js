
function createValue(initial) {
    var value = initial;
    
    return function (newvalue) {
        if (arguments.length)
            value = newvalue;
        
        return value;
    };
}

function value(initial) {
    if (initial === undefined)
        initial = null;
        
    return createValue(initial);
}

module.exports = {
    value: value
}