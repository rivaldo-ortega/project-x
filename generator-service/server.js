import express from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const port = 4000

const secretKey = 'your-secret-key'

app.get('/api/generate', (req, res) => {
  const token = jwt.sign({}, secretKey, {expiresIn: '1h'})
  res.json({token})
})

app.listen(port, () => {
  console.log(`Generator Service is running on port ${port}`)
})
