const express = require('express');

const app = express();

app.get('/', (req, res) => {
 res.send('¡Hola mundo a todos! ahora si');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
