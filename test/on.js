
var sv = require('..');

exports['on set'] = function (test) {
    test.async();
    
    var value = sv.value();
    
    value.on('set', function (data) {
        test.ok(data);
        test.strictEqual(data, 'foo');
        test.done();
    });
    
    value('foo');
};

exports['on set same value'] = function (test) {
    test.async();
    
    var value = sv.value('foo');
    
    value.on('set', function (data) {
        test.ok(data);
        test.strictEqual(data, 'foo');
        test.done();
    });
    
    value('foo');
};

exports['on change'] = function (test) {
    test.async();
    
    var value = sv.value();
    
    value.on('change', function (data) {
        test.ok(data);
        test.strictEqual(data, 'foo');
        test.done();
    });
    
    value('foo');
};
