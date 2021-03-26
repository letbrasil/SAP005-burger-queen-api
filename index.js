const express = require('express');
const routes = require('./server/routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', routes);

app.get('*', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
