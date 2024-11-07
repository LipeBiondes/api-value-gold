require('dotenv').config()
const express = require('express')
const cors = require('cors')
const getValueOfGold = require('./utils/get.gold.value')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Bem-vindo à API do valor do ouro!',
    availableRoutes: [{ method: 'GET', path: '/gold/value' }]
  })
})

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

app.use((__, res) => {
  res.status(404).send({
    message: 'Rota não encontrada.',
    availableRoutes: [{ method: 'GET', path: '/gold/value' }]
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`)
})
