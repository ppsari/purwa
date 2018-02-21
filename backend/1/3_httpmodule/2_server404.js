const http = require('http')

var server = http.createServer(function(req,res){
     console.log('Request : ' + req.url);
     res.writeHead(404, {
       'Content-Type' : 'text/html'
     })
     res.end('<h1>Halo semuanya!</h1>')
})


server.listen(3000);
// buka di browser = localhost : 3000
console.log('Server aktif. Listening port 3000.');