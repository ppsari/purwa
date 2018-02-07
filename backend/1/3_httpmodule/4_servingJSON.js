const http = require('http')
const fs = require('fs')

let server = http.createServer(function(req,res){
   console.log('Request : ' + req.url)
   res.writeHead(200, {'Content-Type':'application/json'})
   var dataku = {
      nama: 'Lintang',
      usia: 24,
      lapar: false
   }
   res.end(JSON.stringify(dataku,null,2))
})

server.listen(3000)
console.log('Server aktif. Listening port 3000.')