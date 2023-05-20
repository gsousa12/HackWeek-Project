const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.send('Olá Mundo!!');
})

app.listen(3000);