const fs = require('fs')

let createStory = function () {
  let arr = []

  for(let baris = 0; baris < 20000; baris++) {
    let str = ''
    for(let i = 0; i <61; i++) str += 'a'
    arr.push(str)
  }
  return arr.join('\n')
}

fs.writeFileSync('halo.txt', createStory()) //bikin file content itu

let bacaStream = fs.createReadStream(__dirname+'/halo.txt', 'utf8')
bacaStream.on('data', function (potData) {
  console.log('**** pot data masuk: ****')
  console.log(potData)

  console.log(bacaStream.bytesRead);
   bacaStream.pause();
   setTimeout(function(){
         bacaStream.resume();
   },5000)

})