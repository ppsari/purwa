let nama = 'Andi'
let usia = 20

let print = (nama, usia) => {
  console.log(nama+' berumur '+usia)
}

// module.exports = {
//   nama,
//   usia,
//   print
// }

module.exports.nama = nama
module.exports.usia = usia
module.exports.print = print