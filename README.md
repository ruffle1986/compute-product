product
=======

Computes the cartesian product of the given list of subsets.

According to the performance tests with (matcha)[https://www.npmjs.com/package/matcha],
it's faster than (cartesian-product)[https://www.npmjs.com/package/cartesian-product]
if you work with non-integer subsets like string or object arrays.

It's even faster when it's written in es5 but I wanted to implement it in es6.

## Install

```sh
$ npm i -g product
```

## Usage

```js
import product from 'product'

product([[1, 2], [4, 5]]) // [[1, 4], [1, 5], [2, 4], [2, 5]]

```

## Benchmark

```sh
$ npm run bench
```

## Tests

```sh
$ npm test
```

## Build

```sh
$ npm run build
```

## Contributing

If you have any idea about how to make it faster, pull requests are welcome. ;)

## License

(MIT)[LICENSE]
