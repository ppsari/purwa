const argv = require('yargs').argv
//run:
// node yargs  --usia 17  --judul 'kawan'
console.log(argv.usia)
if(argv.usia >= 17) console.log("Bisa bikin sim")
else console.log("Jangan macam-macam")

console.log('------------------')
let perintah = process.argv
console.log(perintah)
console.log(perintah[3])
console.log(argv.judul)
