require('dotenv').config()
const express = require('express')
const rateLimit = require('express-rate-limit')
const cors = require('cors')
const getValueOfGold = require('./utils/get.gold.value')

const app = express()

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message:
    'Muitas requisições. Por favor, tente novamente depois de 15 minutos.',
  headers: true
})

app.use(limiter)

app.use(cors())
app.use(express.json())

app.get('/gold/value', async (req, res) => {
  try {
    const value = await getValueOfGold()

    if (value === null) {
      return res
        .status(500)
        .send({ message: 'Erro ao buscar o valor da grama do ouro' })
    }

    res
      .status(200)
      .send({ message: `O valor da grama do ouro hoje é R$ ${value}`, value })
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .send({ message: 'Erro ao buscar o valor da grama do ouro' })
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`)
})
