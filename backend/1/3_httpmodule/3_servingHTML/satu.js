const http = require('http')
const fs = require('fs')


// let x = fs.readFileSync('satu.html', 'utf8')
// let server = http.createServer(function(req,res){
//      console.log('Request : ' + req.url)
//      res.writeHead(200, {'Content-Type':'text/html'})
//      res.end(x)
// })

//using read stream
let server = http.createServer(function(req,res){
   console.log('Request : ' + req.url)
   res.writeHead(200, {'Content-Type':'text/html'})

   let bacaStream =fs.createReadStream(__dirname+'/satu.html','utf8')
   bacaStream.pipe(res)
})

server.listen(3000)
console.log('Server aktif. Listening port 3000.')