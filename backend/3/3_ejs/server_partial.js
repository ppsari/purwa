const express = require('express')
const app = express()

// buat folder ‘views’!
app.set('view engine' , 'ejs')

app.get('/partial1', function(req, res){
  res.render('3_partial_1')
})

app.get('/partial2', function(req, res){
  res.render('3_partial_2')
})

app.listen(3000)