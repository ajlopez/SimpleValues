
var sv = require('..');

exports['create value, with null'] = function (test) {
    var value = sv.value();
    
    test.ok(value);
    test.equal(typeof value, 'function');
    test.strictEqual(value(), null);
};

