
var sv = require('..');

exports['create value, with null'] = function (test) {
    var value = sv.value();
    
    test.ok(value);
    test.equal(typeof value, 'function');
    test.strictEqual(value(), null);
};

exports['create value with initial data'] = function (test) {
    var value = sv.value(123);
    
    test.ok(value);
    test.equal(typeof value, 'function');
    test.strictEqual(value(), 123);
};

exports['set and get value'] = function (test) {
    var value = sv.value();
    
    test.ok(value);
    test.equal(typeof value, 'function');
    test.strictEqual(value(), null);
    
    value(123);
    test.strictEqual(value(), 123);
};
