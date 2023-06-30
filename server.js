const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor web local iniciado en el puerto 3000.');
});


