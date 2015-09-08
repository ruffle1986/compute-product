import {reduce, forEach, concat} from 'fast.js'
export default function (arr = []) {
  return reduce(arr, (a, b) => {
    const result = []
    forEach(a, ai => forEach(b, bi => result.push(concat(ai, [bi]))))
    return result
  }, [[]])
}
