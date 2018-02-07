const url = require('url')

let link = 'http://lin.id/data.htm?tgl=2&bln=july'
let x = url.parse(link, true)

console.log('Host ='+x.host)
console.log('Path ='+x.pathname)
console.log('Find ='+x.search)

let xdata = x.query

console.log(xdata)
console.log(xdata.tgl)
console.log(xdata.bln)