const http = require('http')

var server = http.createServer(function(req,res){
     console.log('Request : ' + req.url);
     res.writeHead(404, {
       'Content-Type' : 'text/html'
     })
     res.end('<h1>Halo semuanya!</h1>')
})


server.listen(1234, '127.127.127.127');
// buka di browser = 127.127.127.127 : 1234
console.log('Server aktif. Listening port 1234.');