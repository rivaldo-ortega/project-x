import express from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const port = 4000

const secretKey = 'secret-key'

app.post('/api/generate', (req, res) => {
  const {id} = req.body
  const token = jwt.sign(id, secretKey)
  res.json({token})
})

app.listen(port, () => {
  console.log(`Generator Service is running on port ${port}`)
})
