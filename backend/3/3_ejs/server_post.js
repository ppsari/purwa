const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const url = bodyParser.urlencoded({ extended: false })

// buat folder ‘views’!
app.set('view engine' , 'ejs')

//form
app.get('/kontak', function(req, res){
	res.render('4_formulir')
})

// app.post('/kontak', url, function(req, res){
// 	console.log(req.body)
// 	res.render('4_formulir')
// })

app.post('/kontak', url, function(req, res){
	console.log(req.body)
	res.render('4_formulir_ok', {data:req.body})
})

app.listen(3000)