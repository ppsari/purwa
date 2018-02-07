const fs = require('fs')


// fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
// fs.writeFile('halo.txt', 'Halo') //bikin file content itu
// fs.appendFile('halo.txt', '\nDunia')// di tambah \ndunia
// fs.writeFileSync('halo.txt', 'Halo') //bikin file content itu
// fs.appendFileSync('halo.txt', '\nYa')// di tambah \ndunia

// //tanpa dan dengan utf 8
// var x = fs.readFileSync('halo.txt')
// let x_utf = fs.readFileSync('halo.txt', 'utf8')
// let x_str = fs.readFileSync('halo.txt').toString()
//
// console.log(x)
// console.log(''+x)
// console.log(x_str)
// console.log(x_utf)
//
// let y_buffer = fs.readFile('halo.txt',
// function(err, data){
//   console.log(data)
// })
//
//
// let y_utf = fs.readFile('halo.txt', 'utf8',
// 	function(err, data){
// 		console.log(data)
// })
//
// let y_str = fs.readFile('halo.txt',
// 	function(err, data){
// 		console.log(data.toString())
// })
//
// fs.rename('halo.txt', 'halodunia.txt')
fs.copyFileSync('halo.txt', 'destination2.txt',
//   function(err){
//     if (err) console.log(err)
// }
);

// fs.unlink('halodunia.txt') //delete
// fs.mkdir('okay')
// fs.rmdir('okay')