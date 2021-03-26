// aqui vai o código que acessa o banco de dados

const getAllProducts = (req, res) => {
  res.send('Testando rota "/products"');
};

module.exports = { getAllProducts };
