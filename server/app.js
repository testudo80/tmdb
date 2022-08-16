const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/users', (req, res) => {
  const users = [{ name: 'matti', age: 23 }]
  res.status(200).json(users)
})

const port = process.env.PORT || 5173
app.listen(port, () => console.log(`listening port ${port}`))
