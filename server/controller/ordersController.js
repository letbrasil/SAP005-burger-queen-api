// aqui vai o código que acessa o banco de dados

const getAllOrders = (req, res) => {
  res.send('Testando rota "/orders"')
}

module.exports = { getAllOrders }