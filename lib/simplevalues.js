
function createValue() {
    var value = null;
    
    return function (newvalue) {
        if (arguments.length)
            value = newvalue;
        
        return value;
    };
}

function value() {
    return createValue();
}

module.exports = {
    value: value
}