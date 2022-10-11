const express = require('express')
const app = express()
const port = 3000

app.get('/api/food/:markets?:key?', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send('food results here!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})