const express = require('express')
const app = express()

const data = require('./data.js');

app.get('/', (req, res) => {
  res.send('Hello World! My name is Tanner')
})

app.get('/dirtbikes', (req, res) => {
    res.json(data)
})
app.get('/dirtbikes/:id', (req, res) => {
    console.log(req.params.id)
    const dirtbikeId = Number(req.params.id)
    const dirtbike = data.find(item => item.id === dirtbikeId)
    res.json(dirtbike)
})
app.get('/dirtbikes/brands/:brand', (req, res) => {
    const dirtbikeBrand = req.params.brand
    const dirtbike = data.find(item => item.brand === dirtbikeBrand)
    res.json(dirtbike)
})
module.exports = app