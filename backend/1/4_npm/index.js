'use strict'

function maxArray(arr){
	let max = Math.max(...arr)
	return max
}

function minArray(arr) {
	let min = Math.min(...arr)
	return min
}

module.exports = {
	maxArray,
	minArray
}
