
var sv = require('..');

exports['on set'] = function (test) {
    test.async();
    
    var array = sv.array();
    
    array.on('set', function (data, key) {
        test.ok(data);
        test.strictEqual(data, 'foo');
        test.strictEqual(key, 0);
        test.done();
    });
    
    array(0, 'foo');
};

exports['on set same value'] = function (test) {
    test.async();
    
    var array = sv.array(['foo']);
    
    array.on('set', function (data, key) {
        test.ok(data);
        test.strictEqual(data, 'foo');
        test.strictEqual(key, 0);
        test.done();
    });
    
    array(0, 'foo');
};

exports['on change'] = function (test) {
    test.async();
    
    var array = sv.array();
    
    array.on('change', function (data, key) {
        test.ok(data);
        test.strictEqual(data, 'foo');
        test.strictEqual(key, 0);
        test.done();
    });
    
    array(0, 'foo');
};

exports['on clear'] = function (test) {
    test.async();
    
    var array = sv.array();
    
    array.on('clear', function () {
        test.done();
    });
    
    array.clear();
};

exports['on push'] = function (test) {
    test.async();
    
    var array = sv.array();
    
    array.on('push', function (item) {
        test.ok(item);
        test.equal(item, 123);
        test.done();
    });
    
    array.push(123);
};

