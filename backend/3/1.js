const express = require('express')
const app = express()

app.get('/', function(req, res){
  res.send('<h1>Welcome</h1>')
})

//static req
app.get('/halo', function(req, res){
  res.send('Halo')
})

//dynamic req
//detik.com/search?genre=politik&hot=true
app.get('/search', function(req, res){
  console.log(req.query.genre)
   res.send(req.query);
})

//localhost/query?nama=amir
// app.get('/query', function(req, res){
//     console.log(req.query.nama)
//     res.send(req.query.nama);
// })

//localhost:3000/id/user1/order/order5
app.get('/id/:id/order/:order_id', function(req, res){
  let id = req.params.id
  let order_id = req.params.order_id
  res.send('Request ID '+id+' '+order_id)
})
//
app.listen(3000)