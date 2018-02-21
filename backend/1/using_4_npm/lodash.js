const _ = require('lodash')

console.log(_.isString(135))
console.log(_.isString('Startup'))


console.log(_.capitalize('GOOGLE'))
console.log(_.upperFirst('facebook'))
console.log(_.upperCase('alibaba'))
console.log(_.lowerFirst('TWITTER'))
console.log(_.lowerCase('YAHOO'))
console.log(_.isNumber(24))
console.log(_.isNumber('Andi'))

console.log(_.add(100,2))
console.log(_.subtract(48,5))
console.log(_.multiply(2,9))
console.log(_.divide(75,3))
console.log(_.ceil(99.3))
console.log(_.floor(99.3))

var x = [1,3,2,4,3,5,4,6]
var y = ['Andi', 1, 'Budi', 2]

console.log(_.isArray(x))
console.log(_.uniq(x))
console.log(_.max(x))
console.log(_.min(y))
console.log(_.sum(x))
console.log(_.reverse(y))