require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {searchProducts} = require('./service/products')


const corsOptions = {
  origin: process.env.FRONT_DOMAIN
}

app.use(cors(corsOptions))

app.get('/api/food/:markets?:key?', async (req, res) => {
  const data = await searchProducts(req.query.key, {
    markets: req.query.markets
  }) 
  res.send(data)
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`App listening on port ${process.env.SERVER_PORT}`)
})