
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

function value(initial) {
    if (initial === undefined)
        initial = null;
        
    return createValue(initial);
}

module.exports = {
    value: value
}