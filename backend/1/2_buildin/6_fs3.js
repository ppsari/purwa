var fs = require('fs');

var bacaStream = fs.createReadStream(__dirname+'/halo.txt','utf8');

var tulisStream = fs.createWriteStream(__dirname+'/halo2.txt');

// bacaStream.on('data', function(potData){
// 	console.log('*** Potongan data masuk! ***');
// 	tulisStream.write(potData);
// })

bacaStream.pipe(tulisStream);

// *Akan muncul file halo2.txt yg kontennya
// Sama dengan hasil pembacaan halo.txt