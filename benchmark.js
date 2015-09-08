/* globals bench suite */
var cartesianProduct = require('cartesian-product')
var product = require('./dist/')

function run(fn) {
  fn([[1], [4], [7]])
  fn([[1, 2], [4, 5], [7, 8]])
  fn([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  fn([[1, 2, 3, 4], [4, 5, 6, 7], [7, 8, 9, 10], [{}]])
  fn([[1, 2, 3, 4], [4, 5, 6, 7], [7, 8, 9, 10], ['a', 'b']])
  fn(['red', 'green', 'blue'], ['l', 'xl', 'xxl'], [{}, {}])
}

suite('cartesian product', function () {
  bench('product', function () {
    run(product)
  })
  bench('cartesian-product', function () {
    run(cartesianProduct)
  })
})
