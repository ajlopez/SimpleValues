
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
    var listeners = { };
    
    var fn = function (key, newvalue) {
        if (arguments.length > 1) {
            var oldvalue = values[key];
            values[key] = newvalue;
            
            emit('set', newvalue, key);
            
            if (oldvalue !== newvalue)
                emit('change', newvalue, key);
        }
        
        return values[key];
    };
    
    fn.count = function () { return Object.keys(values).length; };
    
    fn.push = function (newvalue) { values.push(newvalue); return this; };
    
    fn.clear = function () { values = []; };
    
    fn.on = function (event, listener) {
        if (!listeners[event])
            listeners[event] = [];
            
        listeners[event].push(listener);
    };
    
    function emit(event, data, key) {
        var fns = listeners[event];
        
        if (!fns)
            return;
            
        fns.forEach(function (fn) {
            setImmediate(function () { fn(data, key); });
        });
    }
    
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