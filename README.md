# SimpleValues

SimpleValues for models, with observer pattern.

## Installation

Via npm on Node:

```
npm install simplevalues
```

## Usage

Reference in your program:

```js
var sv = require('simplevalues');
```

Create a value with `null` as initial data
```js
var v = sv.value();
```

Create a value with initial data
```js
var v = sv.value(123);
```

Get data value
```js
var data = v();
```

Set data value
```js
v(124);
```

On set data:
```js
v.on('set', function (data) {
    console.log(data);
});
```

On change data:
```js
v.on('change', function (data) {
    console.log(data);
});
```

The `change` event is only emitted when the new value is strict not equal to the old value.

## Development

```
git clone git://github.com/ajlopez/SimpleValues.git
cd SimpleValues
npm install
npm test
```

## Samples

TBD

## Projects

Projects that use SimpleValues:

TBD

## Versions

TBD

## License

MIT

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleValues) and submit
[pull requests](https://github.com/ajlopez/SimpleValues/pulls) — contributions are
welcome<

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

