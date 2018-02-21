const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
   console.log('Request : ' + req.url)
   if(req.url === '/home' || req.url === '/'){
      res.writeHead(200, {'Content-Type':'text/html'})
      fs.createReadStream(__dirname+'/home.html').pipe(res)
   } else {
     res.writeHead(404, {'Content-Type': 'text/html'})
     fs.createReadStream(__dirname+'/404.html').pipe(res)
   }

  // let status_head
  // let file
  //
  // switch(req.url){
  //   case '/home' : case '/' :
  //     status_head = 200
  //     file = '/home.html'
  //     break;
  //   default:
  //     status_head = 400
  //     file = '/404.html'
  //     break;
  // }
  // res.writeHead(status_head)
  // fs.createReadStream(__dirname+file).pipe(res)

});

server.listen(4000);
console.log('Server aktif, port 4000.');