const events = require('events')

//panggil object events buat bikin event sendiri
let eventKu = new events.EventEmitter()
//bikin event
eventKu.on('lapar', function() {
  console.log('Anda mulai lapar')
})

eventKu.on('drag', function() {
  console.log('Anda ngedrag')
})

eventKu.on('ngidam', function(food) {
  console.log('Anda mulai ngidam'+ food)
})
//event detail
console.log('Total Evt: '+eventKu._eventsCount)
console.log('Nama Evt: '+eventKu.eventNames())
//run event
eventKu.emit('lapar')
eventKu.emit('drag')
eventKu.emit('ngidam','es krim')