import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'TVDE Finance Manager API is running!' })
})

app.get('/api/dashboard', (req, res) => {
  res.json({
    expenses: 0,
    income: 0,
    profit: 0,
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
