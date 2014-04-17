
function createValue(initial) {
    var value = initial;
    var listeners = { };
    
    var fn = function (newvalue) {
        if (arguments.length) {
            var oldvalue = value;
            value = newvalue;
            
            emit('set', value);
            
            if (oldvalue !== newvalue)
                emit('change', value);
        }
        
        return value;
    };
    
    fn.on = function (event, listener) {
        if (!listeners[event])
            listeners[event] = [];
            
        listeners[event].push(listener);
    };
    
    return fn;
    
    function emit(event, data) {
        var fns = listeners[event];
        
        if (!fns)
            return;
            
        fns.forEach(function (fn) {
            setImmediate(function () { fn(data); });
        });
    }
}

function createArray(initial) {
    var values = initial || [];
    
    var fn = function (key, newvalue) {
        if (arguments.length > 1) {
            values[key] = newvalue;
        }
        
        return values[key];
    };
    
    fn.count = function () { return Object.keys(values).length; };
    
    fn.push = function (newvalue) { values.push(newvalue); return this; };
    
    return fn;
}

function value(initial) {
    if (initial === undefined)
        initial = null;
        
    return createValue(initial);
}

function array(initial) {
    return createArray(initial);
}

module.exports = {
    value: value,
    array: array
}