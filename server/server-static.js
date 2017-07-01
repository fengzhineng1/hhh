
// import express from 'express'
// import path from 'path'

var express = require('express')
var path = require('path')

const app = express()

const port = 1000

const staticPath = path.resolve(__dirname,'../dist')
app.use(express.static(staticPath))

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})


