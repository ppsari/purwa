const express = require('express')
const app = express()

// buat folder ‘views’!
app.set('view engine' , 'ejs')



app.get('/id/:nama', function(req, res){
  // merujuk ke file ‘satu’ dalam views.
  res.render('satu', {orang:req.params.nama})
})

// //inject object
app.get('/inject1', function(req, res){
   const orang = {nama:'Andi', usia:24}
   //nama_file, json
   res.render('2_inject_1', {orang: orang})
})
//
app.get('/inject2', function(req, res){
   const orang = ['Adi', 'Budi', 'Caca'];
   res.render('2_inject_2', {orang: orang})
})


//BELOM
//partial
// app.get('/partial1', function(req, res){
//   res.render('3_partial_1')
// })
//
// app.get('/partial2', function(req, res){
//   res.render('3_partial_2')
// })
//

// //form
// const bodyParser = require('body-parser')
// const url = bodyParser.urlencoded({ extended: false })

// app.get('/kontak', function(req, res){
// 	res.render('4_formulir')
// })

// // app.post('/kontak', url, function(req, res){
// // 	console.log(req.body)
// // 	res.render('4_formulir')
// // })
//
// app.post('/kontak', url, function(req, res){
// 	console.log(req.body)
// 	res.render('4_formulir_ok', {data:req.body})
// })
//
//
// //static file
// app.use('/assets', express.static('assets'))
// //    '/assets' = ini route
// //    'assets' = ini ref dir
app.listen(3000)