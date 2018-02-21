const http = require('http')

let dataku = {
   "nama": 'Lintang',
   "usia": 24,
   "lapar": false
}

let server = http.createServer(function(req,res){
   console.log('Request : ' + req.url)
   res.writeHead(200, {'Content-Type':'application/json'})
   res.end(JSON.stringify(dataku))
  //  res.end(JSON.stringify(dataku,null,2))
})

server.listen(3000)
console.log('Server aktif. Listening port 3000.')