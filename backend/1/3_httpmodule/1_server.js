const http = require('http')

let server= http.createServer((req,res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('Halo semuanya!')
})

server.listen(3000, '172.17.0.1')

console.log('Server aktif. Listening port 3000.')