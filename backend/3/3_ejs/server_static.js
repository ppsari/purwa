const express = require('express')
const app = express()

// //static file
app.use('/assets', express.static('assets'))
//    '/assets' = ini route
//    'assets' = ini ref dir

app.listen(3000)