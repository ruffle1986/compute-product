import test from 'ava'
import product from './index.js'

test('return with an array when there is no argument', t => {
  t.same(product(), [[]])
  t.end()
})

test('return with an array that holds another empty array', t => {
  t.same(product([]), [[]])
  t.end()
})

test('produce the cartesian product', t => {
  t.same(product([[1, 2], [4, 5], [7, 8]]), [
    [1, 4, 7],
    [1, 4, 8],
    [1, 5, 7],
    [1, 5, 8],
    [2, 4, 7],
    [2, 4, 8],
    [2, 5, 7],
    [2, 5, 8]
  ])
  t.same(product([[1], [2], [3]]), [[1, 2, 3]])
  t.end()
})

test('work with objects too', t => {
  const a = {a: 'a'}
  const b = {b: 'b'}
  const c = {c: 'c'}
  const d = {d: 'd'}

  t.same(product([[a, b], [c, d]]), [[a, c], [a, d], [b, c], [b, d]])
  t.end()
})

test('work with strings too', t => {
  const colors = ['red', 'green', 'blue']
  const sizes = ['l', 'xl', 'xxl']

  t.same(product([colors, sizes]), [
    ['red', 'l'], ['red', 'xl'], ['red', 'xxl'],
    ['green', 'l'], ['green', 'xl'], ['green', 'xxl'],
    ['blue', 'l'], ['blue', 'xl'], ['blue', 'xxl']
  ])
  t.end()
})
