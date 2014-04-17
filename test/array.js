
var sv = require('..');

exports['create empty array'] = function (test) {
    var array = sv.array();
    
    test.ok(array);
    test.equal(typeof array, 'function');
    test.strictEqual(array.count(), 0);
};

exports['create array with initial data'] = function (test) {
    var array = sv.array([1,2,3]);
    
    test.ok(array);
    test.equal(typeof array, 'function');
    test.strictEqual(array.count(), 3);
    test.strictEqual(array(0), 1);
    test.strictEqual(array(1), 2);
    test.strictEqual(array(2), 3);
};

exports['create array, set and get value'] = function (test) {
    var array = sv.array();
    
    test.ok(array);
    test.equal(typeof array, 'function');
    test.strictEqual(array.count(), 0);
    test.strictEqual(array(1, 2), 2);
    test.strictEqual(array(1), 2);
    test.strictEqual(array.count(), 1);
};

exports['push new data'] = function (test) {
    var array = sv.array();
    
    test.ok(array);
    test.equal(typeof array, 'function');
    test.strictEqual(array.count(), 0);
    array.push(1);
    array.push(2);
    array.push(4);
    test.strictEqual(array.count(), 3);
    test.strictEqual(array(0), 1);
    test.strictEqual(array(1), 2);
    test.strictEqual(array(2), 4);
};

