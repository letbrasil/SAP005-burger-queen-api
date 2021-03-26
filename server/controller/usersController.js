// aqui vai o código que acessa o banco de dados

const getAllUsers = (req, res) => {
  res.send('Testando rota "/users"');
};

module.exports = { getAllUsers };
