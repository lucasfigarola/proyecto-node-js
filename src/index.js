const express = require('express')
const route = require('./routes/productoRouter')

const app = express()

app.use(route)

const PORT = 3000
app.listen(PORT)