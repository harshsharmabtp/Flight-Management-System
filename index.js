const express = require('express');
const app = express()
require('dotenv').config()
const router = require('./Router/route');
require('./utils/db')
const path = require('path')
const frontendpath = path.join(__dirname,'public')
const cors = require('cors')

app.use(express.json())
app.use(router)
app.use(express.static(frontendpath))
app.use(cors())

const PORT = 17002
app.listen(PORT,()=>{

    console.log(`Server Started At PORT = ${PORT}`)
})

