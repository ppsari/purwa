const timers = require('timers')

function waktu() {
  console.log('Halo')
}

function waktu2() {
  console.log('Loop')
}

function waktuparam(jam) {
  console.log('Halo '+jam)
}

//ga pake param bisa langsung
timers.setTimeout(waktu, 1000)

//kalau pake param maka dibungkus function
//timers.setTimeout(fungsi, param,millisecond)
timers.setTimeout(function(){waktuparam(100)},2000)

//timers.setInterval(fungsi,param ,millisecond)
timers.setInterval(waktu2, 10000)

